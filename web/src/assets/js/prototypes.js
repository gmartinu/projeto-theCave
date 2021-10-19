/* eslint-disable no-extend-native */
import dayjs from 'dayjs';

export const setDefaultProtoTypes = () => {
  Date.isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  Date.getDaysInMonth = function (year, month) {
    return [
      31,
      Date.isLeapYear(year) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ][month];
  };

  Date.prototype.isLeapYear = function () {
    return Date.isLeapYear(this.getFullYear());
  };

  Date.prototype.getDaysInMonth = function () {
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
  };

  Date.prototype.addMonths = function (value) {
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
  };

  Date.prototype.format = function (format) {
    return dayjs(this).format(format);
  };

  String.prototype.toBRL = function () {
    const formatter = new Intl.NumberFormat('id', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatter.format(this);
  };

  Number.prototype.toBRL = function () {
    const formatter = new Intl.NumberFormat('id', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatter.format(this);
  };

  Array.prototype.dontHave = function (i, key) {
    return this.find((item) => item[key] === i[key]) ? false : true;
  };

  Array.prototype.sumBy = function (fn) {
    return this.map(typeof fn === 'function' ? fn : (val) => val[fn]).reduce(
      (acc, val) => Number(acc) + Number(val),
      0
    );
  };

  [String, Number].forEach(
    (type) =>
      (type.prototype.in = function (obj) {
        return !!~obj.indexOf(this);
      })
  );
};
