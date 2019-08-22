<style>
    .resources-documentation-nav {
        position: fixed;
    }

    .resources-documentation-nav .menu-label {
        color: #646B75;
        font-size: 14px;
        padding-bottom: 24px;
        text-transform: uppercase;
    }

    .resources-documentation-nav .nav-item {
        padding-bottom: 10px;
    }

    .resources-documentation-nav .nav-link {
        color: #09101D;
        font-size: 18px;
        padding-left: 0;
    }

    .resources-documentation-nav .active.nav-link {
        font-family: 'Yantramanav-Medium';
        font-weight: 500;
    }

    .resources-documentation-nav .child-nav .nav-item {
        padding-bottom: 0;
    }

    .resources-documentation-nav .child-nav .nav-link {
        padding-left: 22px;
        padding-bottom: 6px;
        border-left: 2px solid #F1F2F5;
    }

    .resources-documentation-nav .child-nav .active.nav-link {
        border-color: #D72323;
    }

   /* offset the headings when referenced via hash anchor due to the fixed navbar */ 
    .kb-article-container h4 {
        padding-top: 180px;
        margin-top: -180px;
    }
</style>

<#if !entries?has_content>
	<#if themeDisplay.isSignedIn()>
		<div class="alert alert-info">
			<@liferay.language key="there-are-no-menu-items-to-display" />
		</div>
	</#if>
<#else>
    <div class="resources-documentation-nav">
        <div class="menu-label">
            User Manual
        </div>

        <ul aria-label="Resources Navigation" class="nav navbar-nav" role="menubar" id="${renderResponse.getNamespace()}">
            <#list entries as navItem>
                <#assign
                    nav_item_css_class = "nav-link"
                    nav_item_href = navItem.getRegularURL()
                />

                <#if navItem.isSelected()>
                    <#assign
                        nav_item_css_class = "${nav_item_css_class} active"
                    />
                </#if>

                <li class="nav-item" role="presentation">
                    <a class="${nav_item_css_class}" href="${nav_item_href!""}" ${navItem.getTarget()}>${navItem.getName()}</a>

                    <#if navItem.hasChildren() && navItem.isSelected()>
                        <ul class="nav navbar-nav child-nav">
                            <#list navItem.getChildren() as childNavItem>
                                <li class="nav-item">
                                    <a class="child-nav-link nav-link" href="${childNavItem.URL}">${childNavItem.getName()}</a>
                                </li>
                            </#list>
                        </ul>
                    </#if>
                </li>
            </#list>
        </ul>
    </div>
</#if>

<script>
    AUI().ready('', function () {
        const childNavLinks = document.querySelectorAll('.child-nav-link');
        const headings = document.querySelectorAll('.kb-entity-body h4[id]');

        if (childNavLinks && headings.length) {
            const headingPositionMap = new Map();

            headings.forEach(
                heading => headingPositionMap.set(heading.getBoundingClientRect().top, heading.innerText)
            )

            const addActiveClass = function (text) {
                childNavLinks.forEach(
                    link => {
                        link.classList.remove('active');

                        if (link.innerText === text) {
                            link.classList.add('active');
                        }
                    }
                )
            }

            const headingPositionIterator = headingPositionMap.keys();
            const initialHeadingPos = headingPositionIterator.next().value;

            window.addEventListener(
                'scroll',
                function (event) {
                    const currentScrollPos = document.documentElement.scrollTop;
                    let headingPos = initialHeadingPos;

                    // problematic
                    while (currentScrollPos > headingPos) {
                        headingPos = headingPositionIterator.next().value;
                    }

                    const headingText = headingPositionMap.get(headingPos);

                    addActiveClass(headingText);
                }
            );
        }
    });
</script>