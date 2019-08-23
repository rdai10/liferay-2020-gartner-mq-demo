# Dealer Portal

To set up, deploy and set all pages to use [dealer-portal-theme](/dealer-portal-theme) and place _Navigation Menu_ widget at the top of the page.

## Inventory
### Setup steps:
- Add the _Inventory_ [fragment](/fragments/dealer-portal-collection) to the page.

## Resources
### Setup steps:
- Create an empty page with 2 Columns (30/70) layout. 
- Place _Navigation Menu_ widget on the left side of the page.
  - Under _Configuration_, find _Set Up_ tab and select [_resources-nav_][1] under _Display Templates_.
- Place _Knownledge Base Article_ widget on the right side of the page. 
  - Under _Look and Feel Configuration_, find _Application Decorators_ and select _Barebone_.
  - Go to _Site Administration_, find _Content & Data_ > _Knowledge Base_. Create an article using _h4_ headings and save.
  - Return to _Knownledge Base Article_ widget, configure it by selecting the article created in the previous step.
- Place _Asset Publisher_ widget on the page below _Knowledge Base Article_.
  - Under _Look and Feel Configuration_, find _Application Decorators_ and select _Barebone_.
  - Under _Configuration_, find _Set Up_ tab and select _resources-up-next_ under _Display Templates_.


[1]: [resources widget template](/widget-templates) can be added under _Widget Templates_ in control panel. 
