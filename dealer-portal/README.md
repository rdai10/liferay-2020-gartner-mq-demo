# Dealer Portal

To set up, deploy and set all pages to use [dealer-portal-theme](/dealer-portal/dealer-portal-theme).

All relevant images are in the [assets](/dealer-portal/assets) folder.

## Dashboard
### Setup steps:
- Add _notification_ [fragment](/dealer-portal/src/dealer-portal-collection/notification) at top of the page.
- Add two 50-50 _layout_ from _Section Build_.
  - Insert _performance_, _sales-forcast_, _manufacturer-incentive_, and _vehicle-promotion_ components respectively in the layouts. 
- Add _recent-sales_ [fragment](/dealer-portal/src/dealer-portal-collection/recent-sales) at the bottom of the page.

## Inventory
### Setup steps:
- Add the _Inventory_ [fragment](/dealer-portal/src/dealer-portal-collection/inventory) to the page.

## Resources
### Setup steps:
- Create an empty widget page with 2 Columns (30/70) layout. 
  - Create children pages as shown on mockup (For example: _Quick Reference_, _Safe Driving_).
  - Create grandchildren pages as _Link to URL_ for the child page called _Driving_.
- Place _Navigation Menu_ widget on the left side of the Resourcse page.
  - Under _Configuration_, find _Set Up_ tab and select [_resources-nav_][1] under _Display Templates_.
- Place _Knownledge Base Article_ widget on the right side of the page. 
  - Under _Look and Feel Configuration_, find _Application Decorators_ and select _Barebone_.
  - Go to _Site Administration_, find _Content & Data_ > _Knowledge Base_. Create an article using _h4_ headings and save. Remeber to include an `id` of the heading in the markup. This `id` will be used for the scrolling interaction in the side nav. Ex: `<h4 id="knowledge-base-heading">Knowledge Base Heading</h4>`
  - Return to _Knownledge Base Article_ widget, configure it by selecting the article created in the previous step and unselect all _Display Settings_ checkboxes.
- Place _Asset Publisher_ widget on the page below _Knowledge Base Article_.
  - Under _Look and Feel Configuration_, find _Application Decorators_ and select _Barebone_.
  - Under _Configuration_, find _Set Up_ tab and select _resources-up-next_ under _Display Templates_. Uncheck all _Set and Enable_ checkboxes and save.


[1]: [resources widget template](/widget-templates) can be added under _Widget Templates_ in control panel. 
