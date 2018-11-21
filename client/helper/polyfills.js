if (!String.prototype.endsWith) {
  String.prototype
    .endsWith = str => String.prototype
      .substring(-1) === str
      || String.prototype.slice(-1) === str;
}
