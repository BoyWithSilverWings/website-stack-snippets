import axios from "../axios-instance";

function addTemplate(data) {
  return axios({
    url: "/templates/create",
    data,
  });
}

export default addTemplate;