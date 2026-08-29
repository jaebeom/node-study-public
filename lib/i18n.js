var en = {
  homeTitle: 'node-study',
  homeLead: 'A small practice app for learning Node.js and Express.',
  homeBody: 'Submit the form to see what the server receives in req.body.',
  homeCta: 'Try the form',
  formTitle: 'Form practice',
  formLead: 'Fields sent with POST land in req.body. This is not authentication.',
  nameLabel: 'Name',
  namePlaceholder: 'Name',
  messageLabel: 'Message',
  messagePlaceholder: 'A practice message',
  submit: 'Send',
  homeLink: 'Home',
  resultTitle: 'What the server received',
  sendAgain: 'Send again',
  notFoundHome: 'Home'
};

var ko = {
  homeTitle: 'node-study',
  homeLead: 'Node.js와 Express를 익히기 위한 연습용 앱입니다.',
  homeBody: '폼을 보내면 서버가 req.body로 받은 내용을 그대로 보여 줍니다.',
  homeCta: '폼 연습으로 가기',
  formTitle: '폼 연습',
  formLead: 'POST로 보낸 필드는 서버의 req.body에 들어갑니다. 인증이 아닙니다.',
  nameLabel: '이름',
  namePlaceholder: '이름',
  messageLabel: '메시지',
  messagePlaceholder: '연습용 메시지',
  submit: '보내기',
  homeLink: '홈으로',
  resultTitle: '서버가 받은 값',
  sendAgain: '다시 보내기',
  notFoundHome: '홈으로'
};

function normalizeLang(value) {
  return value === 'ko' ? 'ko' : 'en';
}

function stringsFor(lang) {
  return normalizeLang(lang) === 'ko' ? ko : en;
}

function sideStringsFor(lang) {
  return normalizeLang(lang) === 'ko' ? en : ko;
}

function attach(req, res, next) {
  var lang = normalizeLang((req.query && req.query.lang) || (req.body && req.body.lang));
  res.locals.lang = lang;
  res.locals.t = stringsFor(lang);
  res.locals.side = sideStringsFor(lang);
  res.locals.withLang = function (pathname) {
    return pathname + '?lang=' + lang;
  };
  res.locals.switchLangHref = function (nextLang) {
    return req.path + '?lang=' + normalizeLang(nextLang);
  };
  next();
}

module.exports = {
  attach: attach,
  normalizeLang: normalizeLang
};
