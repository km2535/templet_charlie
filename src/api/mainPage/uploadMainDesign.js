export const updateMainDesign = async (mainPage) => {
  const {
    ID,
    BANNER_IMG,
    BANNER_TITLE,
    BANNER_DESC_MAIN,
    BANNER_DESC_SUB,
    SECTION_FIRST_IMG,
    SECTION_FIRST_TITLE,
    SECTION_FIRST_DESC,
    SECTION_SECOND_IMG,
    SECTION_SECOND_TITLE,
    SECTION_SECOND_DESC,
    SECTION_THIRD_IMG,
    SECTION_THIRD_TITLE,
    SECTION_THIRD_DESC,
    FIRST_SECTION_BG_TITLE,
    SECOND_SECTION_BG_TITLE,
    BOTTOM_BG_COLOR,
  } = mainPage;
  const formData = new FormData();
  formData.append("ID", ID);
  formData.append("BANNER_IMG", BANNER_IMG);
  formData.append("BANNER_TITLE", BANNER_TITLE);
  formData.append("BANNER_DESC_MAIN", BANNER_DESC_MAIN);
  formData.append("BANNER_DESC_SUB", BANNER_DESC_SUB);
  formData.append("SECTION_FIRST_IMG", SECTION_FIRST_IMG);
  formData.append("SECTION_FIRST_TITLE", SECTION_FIRST_TITLE);
  formData.append("SECTION_FIRST_DESC", SECTION_FIRST_DESC);
  formData.append("SECTION_SECOND_IMG", SECTION_SECOND_IMG);
  formData.append("SECTION_SECOND_TITLE", SECTION_SECOND_TITLE);
  formData.append("SECTION_SECOND_DESC", SECTION_SECOND_DESC);
  formData.append("SECTION_THIRD_IMG", SECTION_THIRD_IMG);
  formData.append("SECTION_THIRD_TITLE", SECTION_THIRD_TITLE);
  formData.append("SECTION_THIRD_DESC", SECTION_THIRD_DESC);
  formData.append("FIRST_SECTION_BG_TITLE", FIRST_SECTION_BG_TITLE);
  formData.append("SECOND_SECTION_BG_TITLE", SECOND_SECTION_BG_TITLE);
  formData.append("BOTTOM_BG_COLOR", BOTTOM_BG_COLOR);

  await fetch(
    `${process.env.REACT_APP_API_MAINPAGE_URL}/updateMainDesign.php`,
    {
      method: "POST",
      body: formData,
    }
  )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
