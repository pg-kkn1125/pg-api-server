// http status code 클래스
class HTTP_STATUS {
  // 서버측 오류
  static 500 = {
    ok: false,
    status: 500,
    message: "INTERNAL_SERVER_ERROR",
  };
  // 잘못된 요청
  static 422 = {
    ok: false,
    status: 422,
    message: "UNPROCESSABLE_ENTITY",
  };
  // 찾지 못 함
  static 404 = {
    ok: false,
    status: 404,
    message: "NOT_FOUND",
  };
  // 권한이 없음
  static 403 = {
    ok: false,
    status: 403,
    message: "FORBIDDEN",
  };
  // 생성 됨
  static 201 = {
    ok: true,
    status: 201,
    message: "CREATED",
  };
  // 정상
  static 200 = {
    ok: true,
    status: 200,
    message: "OK",
  };

  // status code에 따른 error throw
  static throw = (code) => {
    // 현재 사용될 시 this는 ErrorException을 가리킵니다.
    const { ok, status, message } = this[code];
    throw { ok, status, message };
  };

  // error response 데이터 반환
  static catch = (res, e) => {
    res.status(e.status).json({
      ok: e.ok,
      message: e.message,
    });
  };

  // json response 데이터 반환
  static jsonResponse = (res, code, rows) => {
    const { ok, message } = this[code];
    res.status(code).json({
      ok: ok,
      message: message,
      ...(rows &&
        code !== 201 && {
          payload: rows,
        }),
    });
  };
}

module.exports = HTTP_STATUS;
