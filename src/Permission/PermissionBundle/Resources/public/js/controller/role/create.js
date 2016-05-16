define(function(require, exports, module) {

    var Validator = require('bootstrap.validator');
    var Notify = require('common/bootstrap-notify');
    require('common/validator-rules').inject(Validator);

    var EdusohoTree = require('edusoho.tree');

    exports.run = function() {
        var $form = $('#role-form');
        var tree = new EdusohoTree({
            element: $("#tree")
        });

        $('#role-submit').on('click', function(event) {
            var checkedNodes = tree.getCheckedNodes();
            var checkedNodesArray = [];
            for (var i = 0; i < checkedNodes.length; i++) {
                checkedNodesArray.push(checkedNodes[i].code);
            };
            $('#menus').val(JSON.stringify(checkedNodesArray));
        });

        var validator = new Validator({
            element: $form,
            autoSubmit: false,
            onFormValidated: function(error, results, $form) {
                if (error) {
                    return;
                }
                $.post($form.attr('action'), $form.serialize(), function(html) {
                    var string = $form.attr('action');
                    
                    if (string.indexOf('edit') >= 0) {
                        Notify.success('权限修改成功!');
                    } else{
                        Notify.success('权限添加成功!');
                    }
                    window.location.reload();
                });

            }
        });

        validator.addItem({
            element: '#name',
            required: true,
            rule: 'remote'
        });

        validator.addItem({
            element: '#code',
            required: true,
            rule: 'remote alphanumeric'
        });
        
    };

});