const urlGetBlogger =
  'http://vietco.dfm-engineering.com/login/custom_token.php';
function* getpostBlogUser() {
  let params = {
    username: 'devk',
    password: '123@Admin',
    service: 'mobile_api_service',
  };
  const response = yield fetch(urlGetBlogger, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      guest_token: '68fecddcb4cd2d3526b499a554f5710f',
    },
    body: JSON.stringify(params),
  });
  var data = yield response.json();
  return yield response.status === 200 ? data : [];
}
export const postApi = {getpostBlogUser};
