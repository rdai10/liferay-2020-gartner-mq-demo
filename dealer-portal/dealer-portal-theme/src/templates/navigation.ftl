<div class="col-md-12 nav-primary">
    <div class="max-width-1224 row">
        <ul class="nav nav-underline col-md-12" role="tablist">
            <#list nav_items as nav_item>
                <#assign
                    nav_item_attr_has_popup = ""
                    nav_item_css_class = "nav-item"
                    nav_item_layout = nav_item.getLayout()
                />

                <#if nav_item.isSelected()>
                    <#assign
                        nav_item_attr_has_popup = "aria-haspopup='true'"
                        nav_item_css_class = "${nav_item_css_class} active"
                    />
                </#if>

                <li class="${nav_item_css_class}" id="layout_${nav_item.getLayoutId()}" role="presentation">
                    <a aria-labelledby="layout_${nav_item.getLayoutId()}" ${nav_item_attr_has_popup} class="nav-link" href="${nav_item.getURL()}" ${nav_item.getTarget()} role="menuitem">${nav_item.getName()}</a>
                </li>
            </#list>
            </li>
        </ul>
    </div>
</div>