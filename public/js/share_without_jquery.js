var popupSize = {
    width: 780,
    height: 550
};
document.addEventListener('DOMContentLoaded', function () {
    var socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            var verticalPos = Math.floor((window.innerWidth - popupSize.width) / 2);
            var horizontalPos = Math.floor((window.innerHeight - popupSize.height) / 2);

            var popup = window.open(button.href, 'social',
                'width=' + popupSize.width + ',height=' + popupSize.height +
                ',left=' + verticalPos + ',top=' + horizontalPos +
                ',location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1');

            if (popup) {
                popup.focus();
            }
        });
    });
});