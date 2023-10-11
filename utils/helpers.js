function formatDate(date) {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date
      ).getFullYear()}`;
}

const Handlebars = require('handlebars');

Handlebars.registerHelper('post-info', function (post) {
    if (post && post.author && post.date) {
        return `Posted by ${post.author} on ${formatDate(post.date)}`;
    } else {
        return 'Invalid or incomplete post data';
    }

    function formatDate(date) {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    }
});

module.exports = {
    formatDate 
}