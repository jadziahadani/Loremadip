function trap(view, fn) {
  return function() {
    var result = fn.apply(null, arguments);
    view();
    return result;
  }
}
