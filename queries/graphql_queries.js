export const GET_HEADER = {
	query: `query GET_HEADER {
		themeGeneralSettings {
		  	themeSettings {
				headerLogo {
			  		altText
			  		sourceUrl
				}
				primaryButtonInfo {
			  		target
			  		title
			  		url
				}
				foooterLogo {
					altText
					sourceUrl
				}
				copyrightText
				facebookUrl
				twitterUrl
				linkedinUrl
				instagramUrl
		  	}
		}
		menuItems(where: {location: HEADER_MENU}) {
		  	nodes {
				label
				uri
				id
		  	}
		}
		footermenu:menuItems(where: {location: FOOTER_MENU}) {
			nodes {
				label
				uri
				id
			}
		}
		footersecondarymenu:menuItems(where: {location: FOOTER_SECONDARY_MENU, parentId: "0"}) {
			nodes {
				label
				uri
				id
				childItems {
					nodes {
						label
						uri
						id
					}
				}
			}
		}
	}`
}

export const GET_SERVICE_PAGE = {
	query: `query GET_SERVICE_PAGE {
		page(id: "services", idType: URI) {
		  title
		  template {
			... on ServicesTemplate {
			  templateName
			  servicePageOptions {
				bannerHeading
				bannerHeading2
				serviceContent {
				  portfolioTitle
				  portfolioTitle2
				  serviceLeftContent
				  serviceRightContent
				  serviceRightTitle
				  serviceTitle
				  servicesTitle
				  allselectsubservices {
					... on Page {
					  id
					  title
					  uri
					  template {
						... on ServiceSubpageTemplate {
						  templateName
						  servicesSubMainPageOption {
							pageDescription
						  }
						}
					  }
					}
				  }
				}
				cta2ButtonInfo {
				  target
				  title
				  url
				}
				cta2Description
				cta2Heading
				servicesSection {
				  ... on Page {
					id
					title
					template {
					  ... on AllMainServiceTemplate {
						templateName
						servicesMainPageOption {
						  pageDescription
						}
					  }
					}
				  }
				}
				portfolioSeeMoreTextNew
				portfolioHeadingNew
				selectPortfolioNew {
					... on Portfolio {
					id
					title
					uri
					template {
						templateName
					}
					portfolioPostOptions {
						portfolioPostDescription
						backgroundImage {
							sourceUrl
						}
					}
					}
				}
				portfolioButtonInfoNew {
					title
					url
				}
			  }
			}
		  }
		}
	  }`
}

export const GET_HOME_PAGE = {
	query: `query GET_HOME_PAGE {
		page(id: "/", idType: URI) {
		  id
		  title
		  template {
			... on HomeTemplate {
			  templateName
			  homePageOptions {
				bannerDescription
				bannerHeading
				bannerImage {
				  sourceUrl
				}
				bannerSubheading
				logosInfo {
				  logo {
					altText
					sourceUrl
				  }
				}
				partnerHeading
				partnerImages {
				  partnerImage {
					altText
					sourceUrl
				  }
				}
				partnerDescription
				staffHeading
				staffAugmentationInfo {
				  heading
				  hireInfo {
					text
				  }
				}
				ctaInfo {
				  heading
				  buttonInfo {
					target
					title
					url
				  }
				}
				solutionHeading
				solutionButtonInfo {
				  target
				  title
				  url
				}
				solutionInfo {
				  description
				  heading
				  iconSolutions
				}
				techHeading
				technologiesInfo {
				  heading
				  technologyInfo {
					title
					image {
					  altText
					  sourceUrl
					}
				  }
				}
				processHeading
				processInfo {
				  description
				  title
				  iconOptionAnimation
				}
				cta2Heading
				cta2Description
				cta2ButtonInfo {
				  target
				  title
				  url
				}
				whoHeading
				whoSubheading
				nutsStandsForInfo {
				  text
				}
				whoAboutHeading
				whoDescription
				whoButtonOneInfo {
				  target
				  title
				  url
				}
				whoButtonTwoInfo {
				  url
				  title
				  target
				}
				whyHeading
				whyWorkWithInfo {
				  description
				  title
				  image {
					altText
					sourceUrl
				  }
				}
				whyButtonOneInfo {
				  target
				  title
				  url
				}
				whyButtonTwoInfo {
				  target
				  title
				  url
				}
				whyCounterInfo {
				  number
				  title
				}
				portfolioHeading
				selectPortfolio {
				  ... on Portfolio {
					id
					title
					uri
					template {
					  templateName
					}
					portfolioPostOptions {
					  portfolioPostDescription
					  backgroundImage {
						sourceUrl
					  }
					}
				  }
				}
				caseStudiesHeading
				caseStudiesButtonInfo {
				  target
				  title
				  url
				}
				selectStudies {
				  ... on Casestudy {
					id
					title
					uri
					featuredImage {
					  node {
						altText
						sourceUrl
					  }
					}
					content
				  }
				}
				serviceHeading
				serviceButtonInfo {
				  target
				  title
				  url
				}
				services {
				  aboutButton {
					target
					title
					url
				  }
				  selectMainService {
					... on Page {
					  id
					  title
					  template {
						... on AllMainServiceTemplate {
						  templateName
						  servicesMainPageOption {
							pageDescription
							iconImage {
							  altText
							  sourceUrl
							}
							iconShap32 {
								sourceUrl
							}
						  }
						}
					  }
					}
				  }
				  selectSubService {
					... on Page {
					  id
					  title
					}
				  }
				  selectLayoutHome
				}
				portfolioSeeMoreText
				portfolioButtonInfo {
				  target
				  title
				  url
				}
			  }
			}
		  }
		}
	  }`
}

export const GET_ABOUT_PAGE = {
	query:`query GET_ABOUT_PAGE {
		page(id: "about-us", idType: URI) {
		template {
		  ... on AboutTemplate {
			templateName
			aboutPageOptions {
			  advantagesHeading
			  bannerHeading
			  beginningContent {
				beginningContentSingle
				fieldGroupName
			  }
			  beginningHeading
			  bunchContent {
				contentSingle
			  }
			  bunchHeading
			  fundamentalInfo {
				title
				description
				fieldGroupName
			  }
			  careerDescription
			  careerHeading
			  cta2Description
			  cta2Heading
			  fieldGroupName
			  fundamentalDescription
			  fundamentalHeading
			  lifeAtDescription
			  lifeAtHeading
			  whatWeHeading
			  selectServices {
				... on Page {
				  id
				  title
				  link
				  slug
				  uri
				  children {
					nodes {
						... on Page {
						id
						title
						}
					  uri
					  id
					  slug
					  link
					}
				  }
				  template {
					... on AllMainServiceTemplate {
					  templateName
					  servicesMainPageOption {
						pageDescription
						iconImage {
							sourceUrl
						}
					  }
					}
				  }
				}
			  }
			  lifeAtSelectImages {
				fieldGroupName
				image {
				  sourceUrl
				}
			  }
			  processHeading
			  processInfo {
				iconOptionAnimation
				description
				fieldGroupName
				title
			  }
			  lifeAtBigImage {
				sourceUrl
			  }
			  cta2ButtonInfo {
				target
				title
				url
			  }
			  careerBackgroundImage {
				sourceUrl
			  }
			  buttonInfo {
				target
				title
				url
			  }
			  bunchLink {
				target
				title
				url
			  }
			  bunchImage {
				sourceUrl
			  }
			  bannerImage {
				sourceUrl
			  }
			  beginningImage {
				sourceUrl
			  }
			  advantagesInfo {
				text
				fieldGroupName
			  }
			}
		  }
		}
	  }
	  themeGeneralSettings {
		themeSettings {
		  footerFormHeading
		  footerFormSubheading
		  footerFormDescription
		  footerFormEmail {
			url
			title
			target
		  }
		  footerFormSkype {
			url
			title
			target
		  }
		  footerFormWhatsappmobile {
			url
			title
			target
		  }
		  footerFormFollowUsText
		  footerFormFormShortcode
		  socialLinksFooter {
			fieldGroupName
			iconSingle {
			  sourceUrl
			}
			linkSingle
		  }
		}
	  }
  	}`
}

export const GET_TELLUS_ABOUT = {
	query:`query GET_TELLUS_ABOUT {
		page(id: "/", idType: URI) {
    id
	  	}
	  	themeGeneralSettings {
			themeSettings {
		  		footerFormHeading
		  		footerFormSubheading
		  		footerFormDescription
		  		footerFormEmail {
					url
					title
					target
		  		}
		  		footerFormSkype {
					url
					title
					target
		  		}
		  		footerFormWhatsappmobile {
					url
					title
					target
		  		}
		  		footerFormFollowUsText
		  		footerFormFormShortcode
		  		socialLinksFooter {
					fieldGroupName
					iconSingle {
			  			sourceUrl
					}
				linkSingle
		  	}
			servicesListAboutform {
				serviceNameSingle
			}
			projectBudgetListForm {
				projectBudgetSingle
			}
			testimonialFirstTitle
			testimonialSecondTitle
			testimonialsbuttonInfo {
				target
				title
				url
			}
			selectTestimonials {
				... on Testimonial {
				id
				content
				title
				featuredImage {
					node {
					sourceUrl
					}
				}
				}
			}
		}
      }
  }`
}

export const GET_PORTFOLIO_PAGE = {
	query: `query GET_PORTFOLIO_PAGE($id: ID = "/portfolio") {
  page(id: $id, idType: URI) {
    slug
    title
    template {
      ... on PortfolioListingTemplate {
        templateName
        portfolioPageOptions {
          selectPortfolio {
            ... on Portfolio {
              id
              slug
              title
              portfolioPostOptions {
                backgroundImage {
                  sourceUrl
                  altText
                }
				portfolioPostDescription
              }
            }
          }
          heading2
          heading
          callToActionHeading
          callToActionDescription
          callToActionButtonInfo {
            target
            title
            url
          }
        }
      }
    }
  }
  themeGeneralSettings {
    themeSettings {
      testimonialsbuttonInfo {
        target
        title
        url
      }
      selectTestimonials {
        ... on Testimonial {
          id
          title
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
      testimonialFirstTitle
      testimonialSecondTitle
    }
  }
}`
}

export const GET_CASE_STUDY_PAGE = {
	query: `query GET_CASE_STUDY_PAGE{
  page(id: "case-studies", idType: URI) {
    title
    template {
      ... on CasestudyListingTemplate {
        templateName
        caseStudyPageOptions {
          csHeading
          csHeading2
          selectCaseStudy {
            ... on Casestudy {
              id
              content
              title
              slug
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
              casestudiestags {
                nodes {
                  name
                }
              }
			  excerpt
			  uri
            }
          }
          callToActionHeading
          callToActionDescription
          callToActionButtonInfo {
            target
            title
            url
          }
        }
      }
    }
  }
  themeGeneralSettings {
    themeSettings {
      testimonialsbuttonInfo {
        target
        title
        url
      }
      selectTestimonials {
        ... on Testimonial {
          id
          title
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
      testimonialFirstTitle
      testimonialSecondTitle
    }
  }
}`
}

export const GET_CONTACT_PAGE = {
	query: `query GET_CONTACT_PAGE {
		page(id: "contact", idType: URI) {
		  id
		  title
		  contactPageOption {
			contactHeading
			contactSubHeading
		  }
		}
	}`
}

export const GET_COLLABORATION_PAGE = {
	query: `query GET_COLLABORATION_PAGE {
		page(id: "collaboration-models", idType: URI) {
		  id
		  title
		  template {
			... on CollaborationTemplate {
			  templateName
			  collaborationPageOptions {
				bannerHeading
				ctaButtonInfo {
				  target
				  title
				  url
				}
				ctaHeading
				ctaSubheading
				fieldGroupName
				waysToDescription
				waysToHeading
				waysToWorkWithUs {
				  description
				  heading
				  image {
					altText
					sourceUrl
				  }
				}
				whyUsDescription
				whyUsHeading
				whyUsSubheading
				bannerSubHeading
			  }
			}
		  }
		}
	}`
}

export const GET_HIRETEAM_PAGE = {
	query: `query GET_HIRETEAM_PAGE {
		page(id: "hire-dedicated-resources", idType: URI) {
		  id
		  title
		  template {
			... on HireDedicatedTemplate {
			  templateName
			  hireOptions {
				advantageHeading
				advantageHeadingTwo
				bannerDescription
				bannerHeading
				benefitsHeading
				advantagesInfo {
				  title
				  content
				}
				benefitsInfo {
				  text
				}
				ctaButtonInfo {
				  target
				  title
				  url
				}
				ctaDescription
				ctaHeading
				faqHeading
				faqHeading2
				whyHireHeading
				whyHireDescription
				whyHireInfo {
				  heading
				  description
				}
				hiringProcessInfo {
				  description
				  heading
				}
				hiringHeading
				hiringDescription
				fieldGroupName
				faqInfo {
				  description
				  heading
				}
				bannerSubHeading
			  }
			}
		  }
		}
	}`
}


export const GET_ALL_POST = {
	query: `query GetPostsEdges($after: String = "") {
		posts(first: 5, after: $after){
		  	edges {
				node {
					id
					title
					date
					categories {
						nodes {
							categoryId
							name
							uri
						}
					}
					featuredImage {
						node {
							mediaItemUrl
						}
					}
					excerpt
					uri
				}
		  	}
			pageInfo {
				endCursor
				hasNextPage
				hasPreviousPage
				startCursor
			}
		}
	}`
}


export const GET_BLOG_PAGE = {
	query: `query GET_BLOG_PAGE($id: ID = "blog") {
		page(id: $id, idType: URI) {
		  title
		  blogPageOption {
			bloglistHeading
			bloglistSubheading
			callToActionButtonInfo {
			  target
			  title
			  url
			}
			callToActionDescription
			callToActionHeading
		  }
		}
	}`
}

export const GET_BLOG_DTL_PAGE = {
	query: `query POST_DETAIL($id: ID = "") {
		post(id: $id, idType: URI) {
		  title
		  featuredImage {
			node {
			  mediaItemUrl
			}
		  }
		  categories {
			nodes {
			  id
			  name
			  uri
			}
		  }
		  author {
			node {
			  name
			  email
			  description
			  username
			  avatar {
				url
			  }
			}
		  }
		  postDetailPageOption {
			tabelOfContentTitle
			shareSectionTitle
			boxTitlePost
			boxTextPost
			boxButtonPost {
			  title
			  url
			  target
			}
			bannerSubTitle
			descriptionBoxMain {
				... on Post_Postdetailpageoption_DescriptionBoxMain_ContentBoxMgr {
				  descriptionMtrMainTitle
				  fieldGroupName
				  descriptionListSinglemtr {
					... on Post_Postdetailpageoption_DescriptionBoxMain_ContentBoxMgr_DescriptionListSinglemtr_TextSubItemsub {
					  fieldGroupName
					  textSubItemMain
					}
					... on Post_Postdetailpageoption_DescriptionBoxMain_ContentBoxMgr_DescriptionListSinglemtr_ImageSubItemsubCopy {
					  fieldGroupName
					  imageSubItemMain {
						uri,
						sourceUrl
					  }
					}
				  }
				}
			}
		  }
		}
	}`
}

export const GET_PORTFOLIO_FIRST = {
	query: `query MyQuery2 {
		portfolioes(first: 1) {
		  nodes {
			  id
			  title
			  portfolioPostOptions {
				backgroundImage {
				  sourceUrl
				}
			  }
			  slug
			  uri
			  portfolioDetailPageNewOption {
				backgroundImageBannerNew {
				  sourceUrl
				}
			  }
			}
		}
	}`
}

export const GET_MAIN_SERVICE = {
	query: `query MyQuery2 {
		pages(last: 50) {
		  nodes {
			id
			title
			slug
			uri
			template {
			  ... on AllMainServiceTemplate {
				templateName
				servicesMainPageOption {
				  pageDescription
				  bannerHeading
				  bannerSubheading
				  callToActionDescription
				  callToActionHeading
				  callToInfoButtonInfo {
					target
					title
					url
				  }
				  portfolioButtonInfo {
					url
					title
					target
				  }
				  portfolioHeading
				  portfolioSeeMoreText
				  sectorDescription
				  sectorLeftText
				  sectorSubTitle
				  sectorTitle
				  selectPortfolio {
					... on Portfolio {
					  id
					  title
					  uri
					  template {
						templateName
					  }
					  portfolioPostOptions {
						portfolioPostDescription
						backgroundImage {
						  sourceUrl
						}
					  }
					}
				  }
				  serviceMainTitle
				}
			  }
			}
			children {
			  edges {
				node {
				  id
				  uri
				  ... on Page {
					id
					title
					uri
					template {
					  ... on ServiceSubpageTemplate {
						templateName
						servicesSubMainPageOption {
						  pageDescription
						}
					  }
					}
				  }
				}
			  }
			}
		  }
		}
	  }`
}

export const GET_ALLSUB_SERVICE = {
	query: `query MyQuery2 {
		pages(last: 50) {
		  nodes {
			id
			title
			slug
			uri
				  template {
				  ... on ServiceSubpageTemplate {
					templateName
					servicesSubMainPageOption {
					  servicebannertitle
					  servicebannertitle2
					  pageDescription
					  serviceContent
					  hireTitle
					  hireTitle2
					  hireContentBeforeBoldText
					  hireContentBoldText
					  hireContentAfterBoldText
					  customizationTitle
					  customizationTitle2
					  advantageContentRepeater {
						content
						title
					  }
					  servicebannerbutton1 {
						target
						title
						url
					  }
					  servicebannerbutton2 {
						target
						title
						url
					  }
					  planRepeater {
						price
						priceTitle
						textRepeater {
						  text
						}
						button {
						  title
						  url
						  target
						}
					  }
					  customizationContentRepeater {
						content
						title
					  }
					  advantageTitle
					  advantageTitle2
					  headingWhyChooseNew
					  serviceDataListChooseNew {
						  descriptionChooseSingle
						  titleChooseSingle
					  }
					  mainTitleDevelopProcess
					  processDataListDevelopment {
						  tabTitleSingleProcess
						  titleSingleProcess
						  detailDataSubdata {
						  subtitleSingleInner
						  descriptionSingleInner
						  }
					  }
					  notesDevelopmentProcess
					  mainTitleWhyDevelopment
					  developmentDataListWhy {
						  titleWhyDsingle
						  descriptionWhyDsingle
					  }
					  mainTitleAcrossIndustries
					  tabListAcrossIndustries {
						  titleTabSingleAcross
						  descriptionTabSingleAcross
						  iconSingleAcross {
							sourceUrl
						  }
					  }
					  mainTitleCommunity
					  communityDataListNew {
						  titleCommunitySingleList
						  descriptionCommunitySingleList
					  }
					  careerHeading
					  careerDescription
					  careerBackgroundImage {
						  sourceUrl
					  }
					  buttonInfo {
						  title
						  url
					  }
					  faqHeading
					  faqInfo {
						  headingFaqSingle
						  descriptionFaqSingle
					  }
					  caseStudiesHeading
					  caseStudiesButtonInfo {
						  url
						  title
					  }
					  selectCaseStudies {
						  ... on Casestudy {
						  id
						  title
						  uri
						  featuredImage {
							  node {
							  altText
							  sourceUrl
							  }
						  }
						  content
						  }
					  }
					  mainTitleExpertise
					mainTitleHiring
					mainTitleTellAboutSer
					hiringBoxList {
					titleSingleHiring
					contentSingleHiring
					}
					tabListExpertise {
					descriptionTabSingleExpertise
					titleTabSingleExpertise
					}
					tellUsBoxListSer {
					titleSingleTellSer
					contentSingleTellSer
					buttonSingleTellSer {
						title
						url
						target
					}
					}
					subTitleAcrossIndustries
					mainTitleLatestInsight
					insightSelectLatest {
						... on Post {
							id
							title
							uri
							terms {
							nodes {
								name
								id
							}
							}
							featuredImage {
							node {
								sourceUrl
							}
							}
						}
					}
					exploreButtonInsight {
						url
						title
					}
					serviceContentLisnew {
						contentSingleText
					}
					}
				  }
				}
		  }
		}
	}`
}

export const GET_ALLCASE_STUDY = {
	query: `query casestudies {
		casestudies {
		  nodes {
			id
			title
			slug
			uri
			caseStudyDetail {
				  caseHeading
				  caseDescription
				  caseSubheading
				  caseBlockImage {
					sourceUrl
					altText
				  }
				  caseLeftMainTitle
				  caseLeftSubTitle
				  caseRightDescription {
					  singleDescriptionRightText
				  }
				  caseRightMainTitle
				  caseRightSubTitle
				  caseStrategyText
				  caseStrategySubHeading
				  caseStrategyMainHeading
				  caseStrategyDescription {
					  fieldGroupName
					  singleStrategyDescriptionText
				  }
				  caseScreensList {
					caseSingleScrimage {
					  altText
					  sourceUrl
					}
					caseImageWidthFull
				  }
				  caseResultDescription {
					  singleCaseResultText
				  }
				  caseResultHeading
				  caseResultStatusList {
					caseResultSingleTitle
					caseResultSingleNumber
				  }
				  caseResultSubHeading
				  caseResultText
				  caseStudiesHeading
				  caseStudiesButtonInfo {
					url
					title
					target
				  }
				  selectStudies {
					... on Casestudy {
					  id
					  title
					  uri
					  featuredImage {
						node {
						  altText
						  sourceUrl
						}
					  }
					  content
					}
				  }
				}
			casestudiestags {
			  nodes {
				name
			  }
			}
		  }
		}
	  }`
}

export const GET_ALL_BLOG = {
	query: `query allblog {
		posts {
		  nodes {
			id
			title
			uri
			slug
			featuredImage {
				  node {
					mediaItemUrl
				  }
				}
				categories {
				  nodes {
					id
					name
					uri
				  }
				}
				author {
				  node {
					name
					email
					description
					username
					avatar {
					  url
					}
				  }
				}
				postDetailPageOption {
				  tabelOfContentTitle
				  shareSectionTitle
				  boxTitlePost
				  boxTextPost
				  boxButtonPost {
					title
					url
					target
				  }
				  bannerSubTitle
				  descriptionBoxMain {
					  ... on Post_Postdetailpageoption_DescriptionBoxMain_ContentBoxMgr {
						descriptionMtrMainTitle
						fieldGroupName
						descriptionListSinglemtr {
						  ... on Post_Postdetailpageoption_DescriptionBoxMain_ContentBoxMgr_DescriptionListSinglemtr_TextSubItemsub {
							fieldGroupName
							textSubItemMain
						  }
						  ... on Post_Postdetailpageoption_DescriptionBoxMain_ContentBoxMgr_DescriptionListSinglemtr_ImageSubItemsubCopy {
							fieldGroupName
							imageSubItemMain {
							  uri,
							  sourceUrl
							}
						  }
						}
					  }
				  }
				}
		  }
		}
	}`
}

export const GET_ALL_PORTFOLIO = {
	query: `query Allportfolio {
		portfolioes {
		  nodes {
			id
			slug
			title
			date
			uri
			portfolioDetailPageNewOption {
				  titleUiscreens
				  titleTypography
				  titleProjectDisc
				  titleEchnologiesNew
				  textUiscreens
				  textResponsiveDe
				  textProductMotion
				  textImmersion
				  textAboutDesign
				  subTitleBannerNew
				  smallTextH5Typography
				  serviceListHeadingBannerNew
				  industriesHeadingBannerNew
				  headingResponsiveDe
				  headingProductMotion
				  headingImmersion
				  headingAboutDesign
				  h5TextTypography
				  h4TextTypography
				  h3TextTypography
				  h2TextTypography
				  h1TextTypography
				  fontNameTypography
				  extraBoldTextfTypography
				  fieldGroupName
				  colorTitleTypography
				  colorTextTypography
				  technologiesListNew {
				  titleSingleRechnologiesNew
				  textSingleRechnologiesNew
				  }
				  serviceListBannerNew {
				  serviceNameSingleBanner
				  }
				  screensListUi {
				  imageSingleScreenitem {
					  sourceUrl
				  }
				  }
				  responsiveImageListDe {
				  imageSingleResponsiveDe {
					  sourceUrl
				  }
				  }
				  projectDisciplinesListNew {
				  textSingleProjectDisc
				  }
				  industriesListBannerNew {
				  industriesNameSingleIndus
				  }
				  image1ThreeBlock {
				  sourceUrl
				  }
				  image2ThreeBlock {
				  sourceUrl
				  }
				  image3ThreeBlock {
				  sourceUrl
				  }
				  disciplinesImagesProjectDisc {
				  imageSingleProjectDisc {
					  sourceUrl
				  }
				  }
				  deviceImage2 {
				  sourceUrl
				  }
				  deviceImage1 {
				  sourceUrl
				  }
				  colorListTypography {
				  colorSelectSingleTypo
				  colorNameSingleTypo
				  fontColorSingleTypo
				  }
				  bannerImageTechnologyNew {
				  sourceUrl
				  }
				  backgroundImageBannerNew {
				  sourceUrl
				  }
				  websiteLinkPortfolio {
					title
					url
					target
				  }
				  videoFileVideoBox {
					mediaItemUrl
				  }
				  backgroundImageVideoBox {
					sourceUrl
				  }
			  }
		  }
		}
	}`
}
