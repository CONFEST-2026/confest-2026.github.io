window.conference.program = (() => {
    const updateHash = (hash) => {
        const scrollPosition = document.documentElement.scrollTop;
        window.location.hash = hash;
        document.documentElement.scrollTop = scrollPosition;
    };

    const init = () => {
        if ($("#day-list")) {
            // Switch to day if page load with hash
            const hash = window.location.hash;
            const hashTab = hash ? $('#day-list a[href="' + hash + '"]') : $();
            if (hashTab.length) {
                hashTab.tab("show");
            }

            // Switch to day if today
            else {
                const tsNow = Math.floor(Date.now() / 1000);

                $('#day-list a[data-toggle="tab"]').each(function () {
                    const tsMidnight = parseInt($(this).data("ts"), 10);

                    if (isNaN(tsMidnight)) {
                        return true;
                    }

                    if (tsNow >= tsMidnight && tsNow < tsMidnight + 24 * 60 * 60) {
                        $(this).tab("show");
                        updateHash(this.hash);
                        return false;
                    }
                });
            }

            // Add current selected day as hash to URL while keeping current scrolling position
            $('a[data-toggle="tab"]').on("shown.bs.tab", function () {
                updateHash(this.hash);
            });
        }
    };

    return {
        init: init,
    };
})();
