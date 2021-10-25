module.exports = {


  friendlyName: 'View sample',


  description: 'Display "Sample" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/sample'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
