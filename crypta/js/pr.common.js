$(function(){
     $('#accordion .card-header').each((index, cardHeader) => {
          $(cardHeader).click(() => {
               $(cardHeader).each((cardHeaderInnerIndex, cardHeaderInner) => {
                    $(cardHeaderInner).removeClass('whiteBG');
               });

               $('#accordion .card-body').each((bodyIndex, collapseBody) => {
                    $(collapseBody).hasClass('collapse') ?
                         $(collapseBody).css('display', 'none') : 
                         $(collapseBody).slideUp(300).addClass('collapse');
               });

               $(cardHeader).addClass('whiteBG');

               $(cardHeader).next().slideDown(300).removeClass('collapse');
          });
     });
});