var clipboard = new ClipboardJS('.emailButton', {
        text: function() {
            return 'sameer.desai.boston@gmail.com';
        }
    });

    clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });
