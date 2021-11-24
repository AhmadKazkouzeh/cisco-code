const sanitizeHTML = (html) => {
  return html?.replace(/(<([^>]+)>)/gi, "");
};
export default sanitizeHTML;
