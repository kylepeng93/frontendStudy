(function ($) {

    var timeSince = function (date, settings) {
        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            if (settings.format) {
                return date.Format(settings.format);
            }
            return date.toLocaleDateString();;
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            if (settings.daysAgo) {
                return interval + settings.daysAgo;
            }
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            if (settings.hoursAgo) {
                return interval + settings.hoursAgo;
            }
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            if (settings.minutesAgo) {
                return interval + settings.minutesAgo;
            }
            return interval + " minutes ago";
        }
        if (interval >= 0) {
            if (settings.secondsAgo) {
                return Math.floor(seconds) + settings.secondsAgo;
            }
            return Math.floor(seconds) + " seconds ago";
        } else {
            if (settings.format) {
                return date.Format(settings.format);
            }
            return date.toLocaleDateString();;
        }
    };

    var initTime = function (settings) {
        if (!settings.attr) {
            settings.attr = 'data-utc-time'
        }
        $('*[' + settings.attr + ']').each(function (t) {
            var timefield = $(this);
            var sourcevalue = timefield.attr(settings.attr);
            var timevalue = sourcevalue;
            if (!sourcevalue.endsWith(' UTC')) {
                timevalue = sourcevalue + ' UTC';
            }
            var date = new Date(timevalue);
            if (isNaN(date.getTime())) {
                if (!sourcevalue.endsWith('Z')) {
                    timevalue = sourcevalue + 'Z';
                } else {
                    timevalue = sourcevalue;
                }
                var date = new Date(timevalue);
            }
            var text = timeSince(date, settings);
            if(settings.disableAgo) {
                if (settings.format) {
                    text = date.Format(settings.format);
                } else {
                    text = date.toLocaleDateString();;
                }
            }
            timefield.html(text);
            if (timefield.tooltip && !settings.disableHover) {
                timefield.attr('data-toggle', 'tooltip');
                timefield.attr('data-trigger', 'hover');
                timefield.attr('data-title', date.toLocaleString());
                timefield.tooltip();
            }
        });
    };

    Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds()
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    $.fn.initUTCTime = function (settings) {
        if(settings == null || settings == undefined) {
            settings = { };
        }

        var loop = function () {
            initTime(settings);
            setTimeout(loop, 1000);
        };
        loop();
    }
}(jQuery))