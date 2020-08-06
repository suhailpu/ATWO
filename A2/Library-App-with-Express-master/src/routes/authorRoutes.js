const express = require("express");

const authorsRouter = express.Router();

function router(nav){
    var authors = [
        {
            title : 'The Shining',
            author : 'Stephen King',
            genre : 'Horror',
            img : "stephen.jpg",
            para:"Stephen Edwin King (born September 21, 1947) is an American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels. His books have sold more than 350 million copies, and many have been adapted into films, television series, miniseries, and comic books."
        },
        {
            title : 'Da Vinci Code',
            author : 'Dan Brown',
            genre : 'Mystery',
            img : "dan.jpg",
            para:"Dan Brown is the author of numerous #1 bestselling novels, including The Da Vinci Code, which has become one of the best selling novels of all time as well as the subject of intellectual debate among readers and scholars. Brown’s novels are published in 56 languages around the world with over 200 million copies in print."
        },
        {
            title : 'Aadujeevitham',
            author : 'Benyamin',
            genre : 'Fiction',
            img : "ben.jpg",
            para:"Benyamin (born Benny Daniel in 1971) is an Indian novelist and short story writer in Malayalam language.Goat Days (Aadujeevitham), his most famous novel, portrays the life of an Indian labourer in Saudi Arabia."
        }   
    ]
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        { 
           nav,
        title:'Library',
        authors
        });
    });
    
    authorsRouter.get('/:id',function(req,res){
       const id = req.params.id
        res.render('author',{
            nav,
            title:'Library',
            author:authors[id] 
        });
    });
    
    return authorsRouter;
}



module.exports = router;