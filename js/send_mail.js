$.validator.setDefaults({
			submitHandler: function() {
				var xmlhttp;
			    var nomprenom = encodeURIComponent(document.getElementById("nomprenom").value);
			    var mail = encodeURIComponent(document.getElementById("mail").value);
			    var sujet = encodeURIComponent(document.getElementById("sujet").value);
			    var messagecontact = encodeURIComponent(document.getElementById("messagecontact").value);

			    if (window.XMLHttpRequest) {
			        // code for IE7+, Firefox, Chrome, Opera, Safari
			        xmlhttp = new XMLHttpRequest();
			    } else {
			        // code for IE6, IE5
			        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			    }

			    xmlhttp.onreadystatechange = function() {
			        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			            document.getElementById("reception").innerHTML = xmlhttp.responseText;
			            //ce qu'on applle en php va pop dans le html, dans la div avec le id"mydiv"
			        }
			    }
			    xmlhttp.open("POST", "traitementformcontact.php", true);
			    // si on passe en post, on ajoute ca. Et on met les valeurs dans le send()
			    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			    xmlhttp.send("nomprenom=" + nomprenom + "&mail=" + mail + "&sujet=" + sujet + "&messagecontact=" + messagecontact);

			    alert('Votre mail a bien été envoyé!');

			    document.getElementById("nomprenom").value = '';
			    document.getElementById("mail").value = '';
			    document.getElementById("sujet").value = '';
			    document.getElementById("messagecontact").value = '';
			}
		});

		$().ready(function() {
			// validate the comment form when it is submitted
			$("#commentForm").validate();
		});