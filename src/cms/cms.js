import CMS from "netlify-cms-app"
import "../assets/sass/styles.sass"

import AboutPagePreview from "./preview-templates/AboutPagePreview"
import ArticlePreview from "./preview-templates/ArticlePreview"
import ContactPagePreview from "./preview-templates/ContactPagePreview"

CMS.init()
CMS.registerPreviewTemplate("blog", ArticlePreview)
CMS.registerPreviewTemplate("about", AboutPagePreview)
CMS.registerPreviewTemplate("contact", ContactPagePreview)
