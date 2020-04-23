(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,t,r){"use strict";r.r(t);var n=r("zufY"),o=r("q1tI"),a=r.n(o),i=r("Wbzz"),c=(r("HQhv"),r("zGcK"),r("+ZDr")),d=r.n(c),s=r("VgBE"),l=(r("1NdR"),s.sorter),f=function(e){var t=e.content,r=e.title;console.log(l);var n=t.map((function(e){return e.node.frontmatter})).sort(l).reduce((function(e,t){return e.length?(e[e.length-1][0].section.split(",")[0]===t.section.split(",")[0]?e[e.length-1].push(t):e.push([t]),e):(e.push([t]),e)}),[]);return a.a.createElement("div",{className:"main-card"},a.a.createElement("h1",{className:"lesson-title gradient"},r),a.a.createElement("div",{className:"lesson-content"},a.a.createElement("ol",{className:"sections-name"},n.map((function(e){return a.a.createElement("li",{key:e[0].section},a.a.createElement("h3",{className:"lesson-section-title"},e[0].section),a.a.createElement("ol",null,e.map((function(e){return a.a.createElement("li",{key:e.path},a.a.createElement(d.a,{to:e.path},e.title))}))))})))))};r("EDuE"),t.default=function(){return a.a.createElement(i.a,{query:"2707967039",render:function(e){return a.a.createElement("div",{className:"index"},a.a.createElement("div",{className:"jumbotron gradient"},a.a.createElement("h1",null,e.site.siteMetadata.title),a.a.createElement("h2",null,e.site.siteMetadata.subtitle)),a.a.createElement(f,{title:"Table of Contents",content:e.allMarkdownRemark.edges}))},data:n})}},VgBE:function(e,t,r){function n(e){if(!/^\d+[A-Z]+$/.test(e))throw new Error(e+" does not match the section format. It must be <numbers><capital letters>, like 16A or 5F (case sensitive)");return[/^\d+/.exec(e)[0],/[A-Z]+$/.exec(e)[0]]}r("HQhv");var o=function(e){return e.split("").map((function(e,t){return e.charCodeAt(0)*Math.pow(10,t)})).reduce((function(e,t){return e+t}))};e.exports.splitSections=n,e.exports.sorter=function(e,t){var r,a;e.attributes&&e.attributes.order?(r=e.attributes.order,a=t.attributes.order):(r=e.order,a=t.order);var i=n(r),c=i[0],d=i[1],s=n(a),l=s[0],f=s[1];return c!==l?c-l:o(d)-o(f)}},zufY:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Project Fox Game","subtitle":"Making a game together","description":"A brief course where we use JavaScript, HTML, and CSS to make a digital pet staring our little fox friend.","keywords":["javascript","digital pet","typescript","frontend","css","html","project","pair coding"]}},"allMarkdownRemark":{"edges":[{"node":{"id":"48a3a9ba-1889-51ce-bbeb-f2bc422ef402","frontmatter":{"order":"1A","path":"/intro","title":"Introduction","section":"Welcome","description":"Brian Holt lays out the course objectives, his background, and where to file issues with the course as well as why he created this course: he believes that containers are going to be important to every developer going forward."}}},{"node":{"id":"cf1030b5-3098-53e6-b3bb-4dcb8548f0b1","frontmatter":{"order":"1B","path":"/the-project","title":"The Project","section":"Welcome","description":"The Project"}}},{"node":{"id":"b3839134-34da-57de-aeb0-0742e9e11aa9","frontmatter":{"order":"2A","path":"/hello-world","title":"Hello World","section":"Frontend Infra","description":"Brian sets up the build process to get hello world on the screen"}}},{"node":{"id":"0216b49e-34d8-5653-b0a7-ad0c2ef92130","frontmatter":{"order":"2B","path":"/build-process","title":"Build Process","section":"Frontend Infra","description":"The Project"}}},{"node":{"id":"906c0156-85ae-5f8d-a743-2fda16b7036b","frontmatter":{"order":"2C","path":"/code-style","title":"Code Style","section":"Frontend Infra","description":"The Project"}}},{"node":{"id":"2f35cc5e-5d3b-5e2e-9348-e4fb2f828a80","frontmatter":{"order":"2D","path":"/code-formatting","title":"Code Formatting","section":"Frontend Infra","description":"The Project"}}},{"node":{"id":"64b4517b-26d8-5182-a9eb-d9f37ab9531c","frontmatter":{"order":"2E","path":"/editor-setup","title":"Editor Setup","section":"Frontend Infra","description":"The Project"}}},{"node":{"id":"63397d86-19f8-5d3f-8e56-515736b0c942","frontmatter":{"order":"2F","path":"/linting","title":"Linting","section":"Frontend Infra","description":"The Project"}}},{"node":{"id":"4919c161-459b-5bf8-9c5b-002a1fee6061","frontmatter":{"order":"2G","path":"/testing","title":"Testing","section":"Frontend Infra","description":"The Project"}}},{"node":{"id":"4819e46b-c144-5a89-b687-f6f08701b972","frontmatter":{"order":"2H","path":"/type-checking","title":"Type Checking","section":"Frontend Infra","description":"The Project"}}},{"node":{"id":"7ad37423-b392-5fed-b9d2-3c9493816eda","frontmatter":{"order":"3A","path":"/organization","title":"Organizing Your Code","section":"Architecture","description":"The Project"}}},{"node":{"id":"1d2c9510-fc5f-5408-a727-a77fb7a109db","frontmatter":{"order":"3B","path":"/init","title":"Init the Project","section":"Architecture","description":"The Project"}}},{"node":{"id":"896bba4a-cbb4-5bfc-b0d6-cb4ffe6c10ca","frontmatter":{"order":"3C","path":"/state-machine","title":"State Machine","section":"Architecture","description":"The Project"}}},{"node":{"id":"096aab9a-f6d0-5b48-9871-17bf3aaf9f04","frontmatter":{"order":"4A","path":"/some-ui","title":"Some UI","section":"The Game","description":"The Project"}}},{"node":{"id":"1a5e5d52-fb55-54eb-b18a-f9fce7c64e1f","frontmatter":{"order":"4B","path":"/interacting-with-the-ui","title":"Interacting with the UI","section":"The Game","description":"The Project"}}},{"node":{"id":"7c11ae8a-b608-5410-bede-5d4295458326","frontmatter":{"order":"4C","path":"/the-states","title":"The States","section":"The Game","description":"The Project"}}},{"node":{"id":"f5ecb4b5-461e-524f-9d28-b94ad959a540","frontmatter":{"order":"4D","path":"/transitioning-between-states","title":"Transitioning Between States","section":"The Game","description":"The Project"}}},{"node":{"id":"1b1446d5-df91-577c-84f7-ed52af317726","frontmatter":{"order":"4E","path":"/pooping","title":"Pooping","section":"The Game","description":"The Project"}}},{"node":{"id":"9331d82f-4694-5a79-842a-1dfc29802ac2","frontmatter":{"order":"4G","path":"/death","title":"Death","section":"The Game","description":"The Project"}}},{"node":{"id":"10ec8996-e060-5887-871d-f6fc7b2f343f","frontmatter":{"order":"5A","path":"/conclusion","title":"Wrapping Up","section":"Conclusion","description":"The Project"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-7540cf6339a088c8e5e7.js.map