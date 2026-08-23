$('.skill-per').each(function () {
    var $this = $(this);
    var per = $this.attr('percentage');
    $this.css("width", per + '%');
    $({ animatedValue: 0 }).animate({ animatedValue: per }, {
        duration: 2000,
        step: function () {
            $this.attr('percentage', Math.floor(this.animatedValue) + '%');
        },
        complete: function () {
            $this.attr('percentage', Math.floor(this.animatedValue) + '%');
        }
    });
});
