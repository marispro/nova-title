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
    let originalTitle = document.title;
    router.beforeEach((to, from, next) => {
        let resourceMeta = getResourceMeta(to.params.resourceName);
        if(resourceMeta !== null){
            document.title = resourceMeta.label + " | " + originalTitle;
        }
        next();
    })
});
