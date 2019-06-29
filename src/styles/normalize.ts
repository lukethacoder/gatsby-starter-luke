import { dimensions, fonts, colors, breakpoints } from "./variables"
import { rem } from "./mixins"

export default `
  @import url('https://fonts.googleapis.com/css?family=Muli|Raleway:400,700')
  @import url(https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.css);
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    // font-size: ${dimensions.font_size.regular}px !important;
    // line-height: ${dimensions.line_height.regular} !important;
    height: 100%;  }

  body {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${fonts.sans_serif};
    color: ${colors.black};
    background-color: ${colors.gradientStart};
    background: ${colors.gradientStart}; /* Old browsers */
    background: -moz-linear-gradient(-45deg, ${colors.gradientStart} 0%, ${
	colors.gradientEnd
} 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, ${colors.gradientStart} 0%,${
	colors.gradientEnd
} 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, ${colors.gradientStart} 0%,${
	colors.gradientEnd
} 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${
		colors.gradientStart
	}', endColorstr='${
	colors.gradientEnd
}',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  #___gatsby {
    height: 100%;
  }

  a {
    color: ${colors.brand.primary};
    text-decoration: none;
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${colors.brand.quaternary};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 1px solid ${colors.brand.quaternary};
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-of-type(odd) {
        td {
          background-color: ${colors.brand.quaternary};
        }
        tr {
          background-color: ${colors.brand.quaternary};
        }
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.414rem;
    margin-bottom: .5rem;
    color: ${colors.black};
    font-weight: 600;
    line-height: ${dimensions.line_height.heading};
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: ${dimensions.heading_sizes.h1}rem;
    color: ${colors.brand.primary};
  }

  h2 {
    font-size: ${dimensions.heading_sizes.h2}rem;
    color: ${colors.brand.primary};
  }

  h3 {
    font-size: ${dimensions.heading_sizes.h3}rem;
    color: ${colors.brand.primary};
  }

  h4, h5, h6 {
    font-size: ${dimensions.heading_sizes.h4}rem;
    color: ${colors.grey.base};
  }

  h6 {
    color: ${colors.white}
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: ${colors.black};
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  li {
    margin: 0 0 8px;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${colors.brand.quaternary};
  }

  blockquote {
    margin: .8rem 0;
    padding: .5rem 1rem;
    border-left: .25rem solid ${colors.brand.primary};
    background-color: rgba(255,255,255,0.05);
    color: ${colors.brand.primary};
    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${rem(breakpoints.md)}em) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }

  .gatsby-highlight {
    background-color: ${colors.gradientStart};
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${colors.brand.primary};
    overflow: visible;
    padding: 0;
    margin: 0 0 16px;
    @media screen and (min-width: 767px) {
      border-bottom-color: ${colors.brand.primary} !important;
    }
    > pre {
      margin: 0;
      padding: 16px 24px;
      border: none;
      background-color: transparent;
      width: 100%;
      height: 100%;
      font-size: ${rem(14)}rem;
      > code {
        color: $content-color;
        font-family: 'Fira Code', monospace;
      }
    }
    &[data-language] {
      position: relative;
      &:after {
        content: '';
        display: block;
        color: ${colors.grey.dark};
        background: ${colors.brand.primary};
        text-transform: uppercase;
        position: absolute;
        top: 0;
        right: 0;
        padding: 4px 12px;
        font-size: 0.875rem;
        font-weight: 700;
        border-bottom-left-radius: 3px;
        @media screen and (max-width: 767px) {
          content: '' !important;
          top: auto;
          bottom: 0;
          right: 0;
          padding: 0;
          width: 100%;
          height: 3px;
        }
      }
    }
    &[data-language="javascript"] {

    border-bottom-color: ${colors.syntax.javascript};
      &:after {
        content: 'JS';
        background-color: ${colors.syntax.javascript};
      }
    }
    &[data-language="json"] {
      border-bottom-color: ${colors.syntax.json};
      &:after {
        content: 'JSON';
        background-color: ${colors.syntax.json};
      }
    }
    &[data-language="html"] {
      border-bottom-color: ${colors.syntax.html};
      &:after {
        content: 'HTML';
        background-color: ${colors.syntax.html};
      }
    }
    // add more languages here
  }
`
