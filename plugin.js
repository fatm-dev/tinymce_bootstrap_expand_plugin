tinyMCE.PluginManager.add('expand', function(editor, url) {
        var collapse_index = 1;
        var openDialog = function() {
            return editor.windowManager.open({
                title: 'Example plugin',
                body: {
                    type: 'panel',
                    items: [{
                        type: 'input',
                        name: 'header',
                        label: 'Header'
                    }]
                },
                buttons: [{
                        type: 'cancel',
                        text: 'Close'
                    },
                    {
                        type: 'submit',
                        text: 'Save',
                        primary: true
                    }
                ],
                onSubmit: function(api) {
                    var data = api.getData();
                    editor.insertContent(`<div class="card"><div class="card-header"><h5 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse` + collapse_index + `" aria-expanded="true" aria-controls="collapseOne">
          ` + data.header + `
        </button>
      </h5>
    </div>

    <div id="collapse` + collapse_index + `" class="collapse show" aria-labelledby="headingOne">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>`);
                    collapse_index++;
                    api.close();
                }
            });
        };

        editor.ui.registry.addButton('expand', {
            text: 'Add expand',
            onAction: function() {
                /* Open window */
                openDialog();
            }
        });
    });
    tinyMCE.init({
        selector: "textarea",
        skin: "bootstrap",
        content_css: "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste expand"
        ],
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image expand",
        init_instance_callback: function(editor) {

            let head = editor.dom.select('head')[0];
             addScript('https://code.jquery.com/jquery-3.5.1.slim.min.js');

    
    		setTimeout(function () {
        		addScript('https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js');
    		}, 500);


            function addScript(scriptUrl) {
                editor.dom.add(
                    head,
                    'script', {
                        src: scriptUrl,
                        type: 'text/javascript'
                    }
                );
            }
        }
    });
