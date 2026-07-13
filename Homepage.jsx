*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

.hero{
height:80vh;
background:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),
url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600");
background-size:cover;
background-position:center;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
color:white;
}

.overlay h1{
font-size:50px;
margin-bottom:20px;
}

.overlay p{
font-size:22px;
margin-bottom:30px;
}

.overlay button{
padding:15px 35px;
font-size:18px;
border:none;
background:#ff9800;
color:white;
cursor:pointer;
border-radius:30px;
}

.overlay button:hover{
background:#ff5722;
}

.about{
padding:60px;
text-align:center;
background:#f5f5f5;
}

.about h2{
font-size:35px;
margin-bottom:20px;
color:#003366;
}

.about p{
font-size:20px;
line-height:1.8;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
padding:60px;
}

.card{
background:white;
padding:30px;
border-radius:15px;
box-shadow:0 0 15px rgba(0,0,0,.2);
transition:.3s;
text-align:center;
}

.card:hover{
transform:translateY(-10px);
}

.card h3{
color:#003366;
margin-bottom:15px;
}
