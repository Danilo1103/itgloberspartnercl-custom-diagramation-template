# Custom Diagramation

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)]


The custom-diagramation-template component allows you to give multiple options to the client to change the position of the elements on the screen.


Grid One Desktop
![image Grid One](https://user-images.githubusercontent.com/94373834/220162819-472b3621-ccce-4905-a603-7ed2c79d2864.png)

Grid Two Desktop
![image Grid Two](https://user-images.githubusercontent.com/94373834/220163101-f71224b1-44d0-4977-96b4-075aa68186b7.png)

Grid Three Desktop
![image](https://user-images.githubusercontent.com/94373834/220163325-6d43a7ea-f2dd-47c4-b0bb-f7a2d0f23ef2.png)

Grid Four Desktop
![image](https://user-images.githubusercontent.com/94373834/220163453-0c3aef0b-a94b-4a6a-83fe-028f73e700e9.png)


Grid Two Mobile
![image](https://user-images.githubusercontent.com/94373834/220163805-5ed8cf36-2fbd-48bf-809a-a79835d455e2.png)

## Configuration 

1. Import the  Quick order's app to your theme's dependencies in the manifest.json, for example:
```json
  "dependencies": {
    "vendor.special-diagramation": "0.x"
  }
 ```
 
 2. Add the Quick order block to the store-theme. For example:
```json
 "flex-layout.row":{
    "children": [
      "custom-grid"
    ]
  },
  "custom-grid":{
    "children": [
      "image#one",
      "image#two",
      "image#three",
      "image#four",
      "image#five"
    ]
  },
   ```
|  Block name     | Description                                     |
| -------------- | ----------------------------------------------- |
| `custom-grid` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  Top level block that must be declared in the store theme block to render a default custom grid block.   |

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

|CSS HANDLES |
| ----------- | 
|`grid__${gridType}`|
|`grid__itemBig`|
|`grid__itemSmall`|


## Contributors

1. [Danilo Ibañez](https://www.linkedin.com/in/danilo-ib%C3%A1%C3%B1ez-519a4023a/)

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
