export const updateMainDesign = async (subPage) => {
  const {
    ID,
    BANNER_IMG,
    BANNER_TITLE,
    BANNER_SUBTITLE,
    BOTTOM_DESC,
    BOTTOM_IMG,
    BOTTOM_TITLE,
    SECTION,
    SUBTITLE,
    TITLE,
    BOTTOM_BG_COLOR,
  } = subPage;
  const formData = new FormData();
  formData.append("ID", ID);
  formData.append("BANNER_IMG", BANNER_IMG);
  formData.append("BANNER_TITLE", BANNER_TITLE);
  formData.append("BANNER_SUBTITLE", BANNER_SUBTITLE);
  formData.append("BOTTOM_DESC", BOTTOM_DESC);
  formData.append("BOTTOM_IMG", BOTTOM_IMG);
  formData.append("BOTTOM_TITLE", BOTTOM_TITLE);
  formData.append("SECTION", SECTION);
  formData.append("SUBTITLE", SUBTITLE);
  formData.append("TITLE", TITLE);
  formData.append("BOTTOM_BG_COLOR", BOTTOM_BG_COLOR);

  await fetch(`${process.env.REACT_APP_API_SUBPAGE_URL}/updateSubDesign.php`, {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
