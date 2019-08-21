<style>
    .asset-preview-wrapper {
        background-color: #FFF;
        border-left: 1px solid #f1f2f5;
        padding-left: 95px;
    }

    .asset-preview-wrapper .asset-preview-heading {
        padding-bottom: 29px;
    }

    .asset-preview-wrapper .asset-preview-body {
        padding-bottom: 48px;
    }

    .asset-preview-wrapper .asset-preview {
        background-color: #f7f8f9;
        padding-top: 28px;
        padding-bottom: 32px;
    }

    .asset-preview-wrapper .asset-preview:hover {
        background-color: #ECEDF0;
    }

    .asset-preview-wrapper .asset-preview-title {
        border-left: 3px solid #D72323;
    }

    .asset-preview-wrapper .asset-preview-title,
    .asset-preview-wrapper .asset-summary {
        padding-left: 32px;
        padding-right: 32px;
    }
</style>

<div class="asset-preview-wrapper" id="${renderResponse.getNamespace()}">
    <div class="col-md-12 row">
        <h5 class="asset-preview-heading">
            Up Next
        </h5>
    </div>

    <div class="asset-preview-body row">
        <#assign counter = 0 />

        <#list entries as curEntry>
            <#assign 
                assetRenderer = curEntry.getAssetRenderer()
                className = assetRenderer.getClassName()
            />

            <#if className == "com.liferay.knowledge.base.model.KBArticle" && counter <= 1>
                <#assign counter = counter + 1 />

                <div class="col-md-6">
                    <div class="asset-preview">
                        <p class="asset-preview-title font-weight-medium">
                            ${curEntry.getTitle(locale)}
                        </p>

                        <p class="asset-summary">
                            ${stringUtil.shorten(curEntry.getSummary(locale), 180)}
                        </p>
                    </div>
                </div>
            </#if>
        </#list>
    </div>
</div>