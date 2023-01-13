import { } from 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
let url_badges = [];
let url_imgs = [];

function gen_imgs()
{
    url_imgs=[];

    let status =true,
        params_badges = [...document.getElementsByClassName('param_img')],
        imgs_src = [...document.getElementsByClassName('img_src')],
        img_src = [];
    if (!imgs_src[imgs_src.length - 1].value)
    {
        status = false;
        imgs_src.pop();
    }
    for (let x = 0; x < imgs_src.length; x++)
    {
        img_src.push(imgs_src[x].value);
        url_imgs.push(imgs_src[x].value);
        params_badges[x].getElementsByTagName('img')[0].src = imgs_src[x].value;
        params_badges[x].getElementsByTagName('img')[0].style.display = 'block';
    }
    if (status)
    {
        document.getElementById('srcs').innerHTML += `<div class="param_img">
                                                            <input type="text" class='img_src' id="label" name="label" placeholder=" ">
                                                            <img src='' alt="badge" style="display: none;">
                                                        </div>`;
    }
    for (let index = 0; index < img_src.length; index++)
            document.getElementsByClassName('img_src')[index].value = img_src[index];
}

function gen_badge()
{
    url_badges=[];
    let status =true,
        labels = [...document.getElementsByClassName('label')],
        Messages = [...document.getElementsByClassName('Message')],
        colors = [...document.getElementsByClassName('color')],
        style_badges = [...document.getElementsByClassName('style_badge')],
        params_badges = [...document.getElementsByClassName('params_badge')],
        label = [],
        message = [],
        color = [],
        style_badge = [];
    if (!labels[labels.length - 1].value)
    {
        status = false;
        labels.pop();
    }
    for (let x = 0; x < labels.length; x++)
    {
        label.push(labels[x].value);
        message.push(Messages[x].value);
        color.push(colors[x].value);
        style_badge.push(style_badges[x].value);
        url_badges.push(`https://img.shields.io/static/v1?label=${labels[x].value}&message=${Messages[x].value}&color=${colors[x].value.substr(1,6)}&style=${style_badges[x].value}`);
        params_badges[x].getElementsByTagName('img')[0].src = url_badges[url_badges.length - 1];
        params_badges[x].getElementsByTagName('img')[0].style.display = 'block';
    }
    if (status)
    {
        document.getElementById('badges').innerHTML += `<div class="params_badge">
                                                            <input type="text" class='label' id="label" name="label" placeholder=" ">
                                                            <input type="text" class='Message' id="Message" name="Message" placeholder=" ">
                                                            <input type="color" class='color' id="color" name="color" placeholder=" ">
                                                            <label for="style">Style</label>
                                                            <select class="style_badge" name="style">
                                                                <option value="plastic">plastic</option>
                                                                <option value="flat">flat</option>
                                                                <option value="flat-square">flat-square</option>
                                                                <option value="for-the-badge">for-the-badge</option>
                                                                <option value="social">social</option>
                                                            </select>
                                                            <img src='' alt="badge" style="display: none;">
                                                        </div>`;
    }
    for (let index = 0; index < labels.length; index++)
    {
            document.getElementsByClassName('label')[index].value = label[index];
            document.getElementsByClassName('Message')[index].value = message[index];
            document.getElementsByClassName('color')[index].value = color[index];
            document.getElementsByClassName('style_badge')[index].value = style_badge[index];
    }
}

function create_out()
{
    let out = ``;
    url_badges.forEach(elem => out += `[![badge](${elem})](https://shields.io)`);
    let imgs = ``;
    url_imgs.forEach(elem => imgs += `[![img](${elem})](https://shields.io)`);
    let tmp = `
# ${document.getElementById('input1').value}
<p align="center">
  <a href="#en-premier">En premier</a> •
  <a href="#comment-l-utiliser">Comment l'utiliser</a> •
  <a href="#fabrique-avec">Fabriqué avec</a> •
  <a href="#auteurs">Auteurs</a> •
  <a href="#notes-de-projets">Notes de projets</a> 
</p>

${imgs}

${document.getElementById('input2').value}

${out}
## En premier
### Pre requis
  ${document.getElementById('input3').value}
### Installation
  ${"```bash"}
  ${document.getElementById('input4').value}
  ${"```"}
## Comment l utiliser
  ${document.getElementById('input5').value}
## Fabrique avec
  ${document.getElementById('input6').value}
## Auteurs
  ${document.getElementById('input7').value}
## Notes de projets
  ${document.getElementById('input8').value}`;
  document.getElementById('result').value = tmp;
  document.getElementById('result_html').innerHTML = marked.parse(tmp);

}

document.getElementById('create_out').addEventListener("click", function () {create_out();});
document.getElementById('gen_badge').addEventListener("click", function () {gen_badge();});
document.getElementById('gen_imgs').addEventListener("click", function () {gen_imgs()});
document.getElementById('result').addEventListener("keydown", function () {
    document.getElementById('result_html').innerHTML = marked.parse(document.getElementById('result').value);
})