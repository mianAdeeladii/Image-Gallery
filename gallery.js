decodeURIComponent.addeventlistener("click",function(e){
if(e.target.classlist.contains("gallery-item")){
    const src=e.target.getattribute("src");
    ducoment.queryselector(".modal-img").src=src;
    var mymodel=new bootstrap.modal(document.getE1ementbyid('gallery-modal' ));
    mymodal.show();
}
}
)