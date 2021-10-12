	Storage.prototype.setObj = function(key, obj) {
		return this.setItem(key, JSON.stringify(obj))
	};
	Storage.prototype.getObj = function(key) {
		return JSON.parse(this.getItem(key))
	};

$(function() {
	if (window.localStorage) {
		
	}
	var save_note = $('#add-note-form');
	var peaple = [{name:'shopping list',rate:' Onion, Orange, Mango'},{name: 'My aadhar number',rate:14597155463157}]; ///submit element for notes
	//console.log(peaple);

	save_note.on('submit',function(e) {  //when submit forms of notes
		e.preventDefault();
		var note_title_input = $('#note-title-input:text').val();
		var note_texts_input = $('#notes').val();
		var note_title = $('.note-title');
		var note_text = $('.note-text');
		var space = " ";
		if (window.localStorage) {
			var items_length = $('#note-file-select .note-file').length + 1;
			localStorage.setItem('_'+items_length,note_title_input);
			var indexNum = localStorage.getItem('_'+items_length);
			localStorage.setItem('_'+items_length+'_t',note_texts_input)
		}		
		var note_par_id = note_title_input.replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','');
			var inst_add = '<div class="col-md-12 p-2 note-file" id="_'+items_length+'"><div class="row"><div class="col-md-9 col-sm-9 col-9"><h5 class="note-title text-capitalize">' + indexNum + '</h5></div><div class="col-md-2 col-sm-2 col-2 p-1 text-right text-primary delete-but" id="_'+items_length+'_d">Delete</div></div></div>'; 
			$('#note-file-select').prepend(inst_add);

		if(note_title_input !== "" && note_texts_input !== "") {
			$('#add-note').hide();
		} else {
			alert("Please fill all forms");
		}
		$('.unhide').addClass('hide').removeClass('unhide');
		$('#note-title-input:text').val('');
		$('#notes').val('');
		//console.log(peaple);
		//note_details.note_title_input = note_title_input;
		//var note_title_data = note_details.note_title_input;
		//console.log(note_details.note_title_input);
		//console.log(note_title_input);
		//console.table(note_details);
		viewDetail();
		countItem();
		showFirst();
		deleteItems();
		emptyText()
		
	}) //End of save_note submit
	
	if (window.localStorage) {
		
		}
		
	for (var i = 0; i < localStorage.length/2; i++) {
			//var note_par_id = items_notes[i].name.replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','');
			var onePlus = i + 1;
			var iTitle = localStorage.getItem('_'+onePlus);
			console.log('_'+onePlus);
			//if (iTitle != null) {
				var last_added = '<div class="col-md-12 p-2 note-file" id="_'+onePlus+'"><div class="row"><div class="col-md-9 col-sm-9 col-9"><h5 class="note-title text-capitalize">' + iTitle + '</h5></div><div class="col-md-2 col-sm-2 col-2 p-1 text-right text-primary delete-but" id="_'+onePlus+'_d">Delete</div></div></div>'; 
				$('#note-file-select').prepend(last_added);
			//}
			
			
		}
	$('#close-note-form').on('click',function() { //close button for note forms
		$('#add-note').hide();
		$('#note-title-input:text').val('');
		$('#notes').val('');
	})
	$('#add-note-btn').on('click',function() { //hide form when saving the note
		$('#add-note').show();
	})

	
	



	
	

	
		

 		viewDetail(); //viewdetails of notes in details section
 		countItem();  //counting of notes items
 		showFirst();	//show first item in details section
 		deleteItems()  //delete note files
 		emptyText();


 	////////////////////////////FILTERING DATA //////////////////////////////
 	

	
 	
}) //End of JQuery Ready function


/////////////////////////////////FUNCTIONSSS ////////////////////////////
function viewDetail(){
	var click_note_file = $('#note-file-select .note-file');
	click_note_file.on('click',function(e) {
		var $this = $(this);		
		var link = $this.attr('id')+'_t';
		if (window.localStorage) {
			var getText = localStorage.getItem(link);
		}
		var thisName =	$this.find('h5').clone();
		$('#text_note').html(getText);
		//var thisText = $this.find('.note-text').text();
		//$('.unhide').addClass('hide').removeClass('unhide');
		//$('#'+link).removeClass('hide').addClass('unhide');
		//alert(link);	
		
		//$('#note-title-view').html(thisTitle);
		$('#note-name').html(thisName);
		//$('#note-text-view').html(thisText);
	})
}
function countItem() {
	var countItems = $('#note-file-select .note-file').length;
 	$('#item-count').text(countItems);
}
function showFirst() {
	var firstItem = $('#note-file-select .note-file').eq(0);
 		var firstItemTitle = firstItem.find('h5').clone();	
 		var link = firstItem.attr('id')+'_t';
		if (window.localStorage) {
			var getText = localStorage.getItem(link);
		}

		$('#text_note').html(getText);
 		//var firstItemText = firstItem.attr('id')+'_p';
 		$('#note-name').html(firstItemTitle);
		//$('#'+firstItemText).removeClass('hide').addClass('unhide');
}
function deleteItems(){
		$('#clearAll').on('click',function(){
			/*var $this = $(this);
			var link = $this.attr('id').substring(0,2);
			var nextInd = $this.attr('id').substring(1,2);
			var numLink = parseInt(nextInd,10);
			
			if (window.localStorage) {
				localStorage.removeItem(link);
				localStorage.removeItem(link+'_t');
			}
			console.log(localStorage.length/2-numLink+1);
			for (var i = numLink+1; i < localStorage.length/2-numLink+1
			; i++) {
				if (window.localStorage) {
					var existStore = localStorage.getItem('_'+i);
					console.log(existStore);
					localStorage.setItem('_'+i-1,existStore);
					var newl = localStorage.getItem('_'+i-1);
					console.log(newl);

				}
			}*/
			if (window.localStorage) {
				localStorage.clear();
			}

			$('#note-file-select .note-file').remove();
			//$('#'+link).remove();

		
			showFirst();
			countItem();
			emptyText();
		});
}
function emptyText() {
	var countItems = $('#note-file-select .note-file').length;
	if (countItems == 0) {
		$('#text_note').prepend('<h6 id="emptyDet" class="p-4 text-center col-md-12">No Notes Available</h6>');
		$('#empty').show();
		//$('#note-file-select').prepend('<h6 id="empty" class="p-4 text-center col-md-12">No Notes Available</h6>');
	} else {
		$('#empty').hide();
		$('#emptyDet').remove();
	}
}



/*function updateNotes() {
	var notesArray;
	for (var i = 0; i < peaple.length; i++) {
		var note_par_id = notesArray[i].name.replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','');
		var last_added = '<div class="col-md-12 p-2 note-file" id="'+note_par_id+'"><h5 class="note-title">' + notesArray[i].name + '</h5></div>'; 
		$('#note-file-select').prepend(last_added);
	}
}*/
