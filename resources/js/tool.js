function parseRouteForDisplay(route)
{
    return route.replace("\/", "").split("/").map(_.startCase).join(" > ")
}

function getResourceMeta(resourceName)
{
    var resourceMeta = Nova.config.resources.filter(function(resource) {
        return resource.uriKey == resourceName
    })

    if(resourceMeta[0] != undefined)
        resourceMeta = resourceMeta[0]
    else
        resourceMeta = null

    return resourceMeta
}

Nova.booting((Vue, router, store) => {
    var originalTitle = document.title;
    router.beforeEach((to, from, next) => {

        var resourceMeta = getResourceMeta(to.params.resourceName)

        document.title = resourceMeta.label + " | " + originalTitle

        next()
    })
});
