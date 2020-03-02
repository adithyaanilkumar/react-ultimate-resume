"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExperiencesBack = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _profile_card_section = require("../../../../commons/profile_card/profile_card_section/profile_card_section");

var _profile_card_section_title = require("../../../../commons/profile_card/profile_card_section_title/profile_card_section_title");

var _profile_card_section_text = require("../../../../commons/profile_card/profile_card_section_text/profile_card_section_text");

var _profile_card_animated_back = require("../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back");

var _profile_card_section_subtitle = require("../../../../commons/profile_card/profile_card_section_subtitle/profile_card_section_subtitle");

var _experiences_back_styles = require("./experiences_back_styles");

var _experiences_translations = require("./experiences_translations");

var useStyles = (0, _reactJss.createUseStyles)(_experiences_back_styles.styles);

var ExperienceContent = function ExperienceContent(_ref) {
  var experience = _ref.experience,
      variant = _ref.variant,
      classes = _ref.classes;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var id = experience.id,
      name = experience.name,
      summary = experience.summary,
      place = experience.place;
  var dateString = (0, _react.useMemo)(function () {
    var _experience$startDate2;

    if (!experience.endDate) {
      var _experience$startDate;

      return formatMessage(_experiences_translations.translations.since, {
        year: ((_experience$startDate = experience.startDate) === null || _experience$startDate === void 0 ? void 0 : _experience$startDate.year()) || ''
      });
    }

    return "".concat(((_experience$startDate2 = experience.startDate) === null || _experience$startDate2 === void 0 ? void 0 : _experience$startDate2.year()) || '', " - ").concat(experience.endDate.year());
  }, [experience]);
  var title = (0, _react.useMemo)(function () {
    var builder = [];

    if (name) {
      builder.push(name);
    }

    if (place === null || place === void 0 ? void 0 : place.name) {
      builder.push(place.name);
    }

    return builder.join(' - ');
  }, [experience]);
  return _react.default.createElement(_profile_card_section.ProfileCardSection, {
    key: id,
    cardVariant: variant
  }, _react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, dateString), _react.default.createElement(_profile_card_section_subtitle.ProfileCardSectionSubtitle, {
    customClasses: {
      container: classes.subtitle
    }
  }, title), _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, summary));
};

var ExperiencesBackComponent = function ExperiencesBackComponent(_ref2) {
  var _data$work;

  var data = _ref2.data;
  var classes = useStyles();
  return _react.default.createElement(_profile_card_animated_back.ProfileCardAnimatedBack, {
    title: "Experiences"
  }, (_data$work = data.work) === null || _data$work === void 0 ? void 0 : _data$work.map(function (experience) {
    return _react.default.createElement(ExperienceContent, {
      key: "work_experience_".concat(experience.id),
      experience: experience,
      classes: classes
    });
  }));
};

var ExperiencesBack = ExperiencesBackComponent;
exports.ExperiencesBack = ExperiencesBack;