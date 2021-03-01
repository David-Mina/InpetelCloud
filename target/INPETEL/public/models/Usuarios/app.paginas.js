$(".btn-paginas").on('click', function(){
    var paginas = $("input:checkbox[name='paginas']:checked").map(function () {
        return this.value;
    }).get();
    
    console.log(paginas);
});
