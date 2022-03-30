exports.install = function(Vue) {
    Vue.filter("formatCurrency", function(value) {
      if ((value !== undefined) || (value !== null)) {  
        return new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
          maximumFractionDigits: 2,
        }).format(value);
      }
      return value;
    });
  };