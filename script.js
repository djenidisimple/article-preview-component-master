let btnShare = document.querySelector(".btn-share");
let btnShare2 = document.querySelector(".btn-share-2");
let share = document.querySelector('.share')

btnShare.addEventListener("click", function () {
    share.style.display = 'flex';
    btnShare.style.backgroundColor = 'var(--Desaturated-dark-blue)';
    btnShare.style.backgroundImage = 'var(--icon-share-2)';
});

document.addEventListener("click", function (e) {
    if (e.target !== btnShare && e.target !== share) {
        share.style.display = "none";
        btnShare.style.backgroundColor = 'var(--light-grayish-blue)';
        btnShare.style.backgroundImage = 'var(--icon-share)';
    }
});

btnShare2.addEventListener("click", function () {
    share.style.display = 'none';
    btnShare.style.backgroundColor = 'var(--light-grayish-blue)';
    btnShare.style.backgroundImage = 'var(--icon-share)';
});