Header = {
    init: function () {
        $('.header .dropdown-toggle').on('mouseleave', function () {
            if (this.parentNode.classList.contains('show')) {
                this.Dropdown.toggle();
            }
        });
    }
};
