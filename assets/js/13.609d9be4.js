(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{413:function(t,e,a){"use strict";a.r(e);var s=a(56),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"create-a-deploy-to-azure-spring-apps-button"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-deploy-to-azure-spring-apps-button"}},[t._v("#")]),t._v(" Create a Deploy to Azure Spring Apps Button")]),t._v(" "),a("p",[a("strong",[t._v("Table of Contents:")])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#requirements"}},[t._v("Requirements")])]),a("li",[a("a",{attrs:{href:"#create-a-service-principal"}},[t._v("Create a service principal")])]),a("li",[a("a",{attrs:{href:"#set-up-account"}},[t._v("Set up account")])]),a("li",[a("a",{attrs:{href:"#button-terms-of-use"}},[t._v("Button Terms of Use")])]),a("li",[a("a",{attrs:{href:"#add-deploy-to-azure-spring-apps-button"}},[t._v("Add deploy to Azure Spring Apps Button")]),a("ul",[a("li",[a("a",{attrs:{href:"#button-image"}},[t._v("Button image")])])])]),a("li",[a("a",{attrs:{href:"#use-a-custom-git-branch"}},[t._v("Use a custom Git branch")])]),a("li",[a("a",{attrs:{href:"#use-a-custom-module"}},[t._v("Use a custom module")])]),a("li",[a("a",{attrs:{href:"#further-reading"}},[t._v("Further reading")])]),a("li",[a("a",{attrs:{href:"#📑-keep-reading"}},[t._v("📑 Keep reading")])]),a("li",[a("a",{attrs:{href:"#⚡-feedback"}},[t._v("⚡ Feedback")])])])]),a("p"),t._v(" "),a("p",[t._v("The "),a("code",[t._v("Deploy to Azure Spring Apps")]),t._v(" button enables users to deploy applicatioin to Azure Spring Apps without leaving the web browser and with little or no configuration. The button is ideal for customers, open-source project maintainers, or add-on providers who wish to provide their customers with a quick and easy way to deploy application to Azure Spring Apps.")]),t._v(" "),a("p",[t._v("The basic requirement of the creation button is that your application source code hosting is in the GitHub repository. We will add deploy button to the "),a("code",[t._v("README.md")]),t._v(" file.")]),t._v(" "),a("p",[t._v("Here’s an example button that deploys a sample to Azure Spring Apps:")]),t._v(" "),a("p",[a("a",{attrs:{href:""}},[a("img",{attrs:{src:"https://user-images.githubusercontent.com/58474919/236122963-8c0857bb-3822-4485-892a-445fa33f1612.png",alt:"Deploy to Azure Spring Apps"}})])]),t._v(" "),a("p",[t._v("This document describes the requirements for apps that use the "),a("code",[t._v("Deploy to Azure Spring Apps")]),t._v(" service, and how to use these buttons make it easy to deploy source code you maintain to Azure Spring Apps.")]),t._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("ul",[a("li",[t._v("The application source code is hosted in the GitHub public repository.")]),t._v(" "),a("li",[t._v("A service principal.")]),t._v(" "),a("li",[t._v("An Azure AD admin user.")])]),t._v(" "),a("h2",{attrs:{id:"create-a-service-principal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-service-principal"}},[t._v("#")]),t._v(" Create a service principal")]),t._v(" "),a("p",[t._v("See this "),a("a",{attrs:{href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#register-an-application-with-azure-ad-and-create-a-service-principal",target:"_blank",rel:"noopener noreferrer"}},[t._v("article"),a("OutboundLink")],1),t._v(" to register an application with Azure AD and create a service principal, then "),a("a",{attrs:{href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#option-3-create-a-new-application-secret",target:"_blank",rel:"noopener noreferrer"}},[t._v("create a new application secret"),a("OutboundLink")],1),t._v(".\nASA button needs to be authenticated and authorized by the service principal, use Azure resource manager to create an Azure Spring Apps app that deploys the source code.")]),t._v(" "),a("h2",{attrs:{id:"set-up-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-account"}},[t._v("#")]),t._v(" Set up account")]),t._v(" "),a("p",[t._v("If you use an administrator account, you can start using the ASA button after logging in. If you do not want to use an administrator account, you can create a new account and grant access to the service principal to use the ASA button by following the steps below.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The following steps need to be in the same tenant.")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("See this "),a("a",{attrs:{href:"https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/add-users-azure-active-directory#add-a-new-user",target:"_blank",rel:"noopener noreferrer"}},[t._v("article"),a("OutboundLink")],1),t._v(" to create a new user.")])]),t._v(" "),a("li",[a("p",[t._v("Grant permission.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Select "),a("strong",[t._v("Delegated permission")]),t._v(" in "),a("strong",[t._v("API permissions")]),t._v(" of the service principal and add the following permissions:")]),t._v(" "),a("ul",[a("li",[t._v("openid")]),t._v(" "),a("li",[t._v("profile")]),t._v(" "),a("li",[t._v("offline_access")])])]),t._v(" "),a("li",[a("p",[t._v("Select "),a("strong",[t._v("Azure Service Management")]),t._v(" in "),a("strong",[t._v("API permissions")]),t._v(" of the service principal and add the following permissions:")]),t._v(" "),a("ul",[a("li",[t._v("user_impersonation")])])])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/grant-admin-consent?pivots=portal#grant-admin-consent-in-app-registrations",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grant admin consent in App registrations"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal#assign-a-user-as-an-administrator-of-an-azure-subscription",target:"_blank",rel:"noopener noreferrer"}},[t._v("Assign a user as an administrator of an Azure subscription"),a("OutboundLink")],1),t._v(".")])])]),t._v(" "),a("h2",{attrs:{id:"button-terms-of-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#button-terms-of-use"}},[t._v("#")]),t._v(" Button Terms of Use")]),t._v(" "),a("p",[t._v("The Azure Terms of Use (Default) governs the Terms of Use of your button unless you provide your own Terms of Use in your GitHub repository. It is common practice to link to your Terms of Use in your README file or to add them as a license file to your GitHub repository.")]),t._v(" "),a("h2",{attrs:{id:"add-deploy-to-azure-spring-apps-button"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-deploy-to-azure-spring-apps-button"}},[t._v("#")]),t._v(" Add deploy to Azure Spring Apps Button")]),t._v(" "),a("p",[t._v("The following is an example that changes the template query parameter to the "),a("code",[t._v("url")]),t._v(" of the repository:")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("When adding only the "),a("code",[t._v("url")]),t._v(", Azure Button will pull the source code from the default branch of your GitHub repository.")])]),t._v(" "),a("p",[a("strong",[t._v("Markdown")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("![Deploy to Azure")]),t._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("https://user-images.githubusercontent.com/58474919/236122963-8c0857bb-3822-4485-892a-445fa33f1612.png")]),t._v(")")]),t._v("](https://azure.spring.launcher.com/deploy.html?url=https://github.com/azure/deploy)\n")])])]),a("p",[t._v("Here’s the equivalent content as HTML if you’d prefer not to use Markdown:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://azure.spring.launcher.com/deploy.html?url=https://github.com/azure/deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://user-images.githubusercontent.com/58474919/236122963-8c0857bb-3822-4485-892a-445fa33f1612.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Deploy to Azure Spring Apps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("strong",[t._v("AsciiDoc")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-asciidoc extra-class"},[a("pre",{pre:!0,attrs:{class:"language-asciidoc"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("https://user-images.githubusercontent.com/58474919/236122963-8c0857bb-3822-4485-892a-445fa33f1612.png"),a("span",{pre:!0,attrs:{class:"token attributes"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("link")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://azure.spring.launcher.com/deploy.html?url=https://github.com/azure/deploy"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("alt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Deploy to Azure Spring Apps"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"200px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])])]),t._v("\n")])])]),a("h3",{attrs:{id:"button-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#button-image"}},[t._v("#")]),t._v(" Button image")]),t._v(" "),a("p",[t._v("When linking to the Azure Button set-up flow, you can either use a raw link or an image link. If using an image, Azure makes available SVG versions at these URLs:")]),t._v(" "),a("div",{staticClass:"language-url extra-class"},[a("pre",{pre:!0,attrs:{class:"language-url"}},[a("code",[a("span",{pre:!0,attrs:{class:"token scheme"}},[t._v("https"),a("span",{pre:!0,attrs:{class:"token scheme-delimiter"}},[t._v(":")])]),a("span",{pre:!0,attrs:{class:"token authority"}},[a("span",{pre:!0,attrs:{class:"token authority-delimiter"}},[t._v("//")]),a("span",{pre:!0,attrs:{class:"token host"}},[t._v("user-images.githubusercontent.com")])]),a("span",{pre:!0,attrs:{class:"token path"}},[a("span",{pre:!0,attrs:{class:"token path-separator"}},[t._v("/")]),t._v("58474919"),a("span",{pre:!0,attrs:{class:"token path-separator"}},[t._v("/")]),t._v("236122963-8c0857bb-3822-4485-892a-445fa33f1612.png")]),t._v("\n")])])]),a("h2",{attrs:{id:"use-a-custom-git-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-a-custom-git-branch"}},[t._v("#")]),t._v(" Use a custom Git branch")]),t._v(" "),a("p",[t._v("If you’d like the button to deploy from a specific Git branch, you can use a fully qualified GitHub URL as the "),a("code",[t._v("branch")]),t._v(" parameter:")]),t._v(" "),a("div",{staticClass:"language-url extra-class"},[a("pre",{pre:!0,attrs:{class:"language-url"}},[a("code",[a("span",{pre:!0,attrs:{class:"token scheme"}},[t._v("https"),a("span",{pre:!0,attrs:{class:"token scheme-delimiter"}},[t._v(":")])]),a("span",{pre:!0,attrs:{class:"token authority"}},[a("span",{pre:!0,attrs:{class:"token authority-delimiter"}},[t._v("//")]),a("span",{pre:!0,attrs:{class:"token host"}},[t._v("azure.spring.launcher.com")])]),a("span",{pre:!0,attrs:{class:"token path"}},[a("span",{pre:!0,attrs:{class:"token path-separator"}},[t._v("/")]),t._v("deploy.html")]),a("span",{pre:!0,attrs:{class:"token query"}},[a("span",{pre:!0,attrs:{class:"token query-delimiter"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token pair"}},[a("span",{pre:!0,attrs:{class:"token key"}},[t._v("url")]),t._v("="),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("https://github.com/azure/deploy")])]),a("span",{pre:!0,attrs:{class:"token pair-delimiter"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token pair"}},[a("span",{pre:!0,attrs:{class:"token key"}},[t._v("branch")]),t._v("="),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("main")])])]),t._v("\n")])])]),a("h2",{attrs:{id:"use-a-custom-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-a-custom-module"}},[t._v("#")]),t._v(" Use a custom module")]),t._v(" "),a("p",[t._v("If you want the button to deploy from a module specified in the source code, you can use the fully qualified GitHub URL as the "),a("code",[t._v("module")]),t._v(" parameter:")]),t._v(" "),a("div",{staticClass:"language-url extra-class"},[a("pre",{pre:!0,attrs:{class:"language-url"}},[a("code",[a("span",{pre:!0,attrs:{class:"token scheme"}},[t._v("https"),a("span",{pre:!0,attrs:{class:"token scheme-delimiter"}},[t._v(":")])]),a("span",{pre:!0,attrs:{class:"token authority"}},[a("span",{pre:!0,attrs:{class:"token authority-delimiter"}},[t._v("//")]),a("span",{pre:!0,attrs:{class:"token host"}},[t._v("azure.spring.launcher.com")])]),a("span",{pre:!0,attrs:{class:"token path"}},[a("span",{pre:!0,attrs:{class:"token path-separator"}},[t._v("/")]),t._v("deploy.html")]),a("span",{pre:!0,attrs:{class:"token query"}},[a("span",{pre:!0,attrs:{class:"token query-delimiter"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token pair"}},[a("span",{pre:!0,attrs:{class:"token key"}},[t._v("url")]),t._v("="),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("https://github.com/azure/deploy")])]),a("span",{pre:!0,attrs:{class:"token pair-delimiter"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token pair"}},[a("span",{pre:!0,attrs:{class:"token key"}},[t._v("branch")]),t._v("="),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("main")])]),a("span",{pre:!0,attrs:{class:"token pair-delimiter"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token pair"}},[a("span",{pre:!0,attrs:{class:"token key"}},[t._v("module")]),t._v("="),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("web")])])]),t._v("\n")])])]),a("h2",{attrs:{id:"further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further reading")]),t._v(" "),a("p",[t._v("For more detailed information about see the following documents:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://learn.microsoft.com/rest/api/azure/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Platform API Reference: App Setups"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"📑-keep-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#📑-keep-reading"}},[t._v("#")]),t._v(" 📑 Keep reading")]),t._v(" "),a("p",[t._v("📓 "),a("a",{attrs:{href:"https://azure.microsoft.com/solutions/integration-services",target:"_blank",rel:"noopener noreferrer"}},[t._v("Deployment Integrations"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"⚡-feedback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#⚡-feedback"}},[t._v("#")]),t._v(" ⚡ Feedback")]),t._v(" "),a("p",[t._v("◀️ "),a("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Log in to submit feedback"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=r.exports}}]);