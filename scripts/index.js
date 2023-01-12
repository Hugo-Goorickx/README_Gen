let url_badges = [];

function gen_badge()
{
    let labels = document.getElementsByClassName('label');
    let label = [], message = [], color = [];
    let Messages = document.getElementsByClassName('Message');
    let colors = document.getElementsByClassName('color');
    let params_badges = document.getElementsByClassName('params_badge');
    for (let x = 0; x < params_badges.length; x++)
    {
        label.push(labels[x].value);
        message.push(Messages[x].value);
        color.push(colors[x].value);
        url_badges.push(`https://img.shields.io/static/v1?label=${labels[x].value}&message=${Messages[x].value}&color=${colors[x].value.substr(1,6)}`);
        params_badges[x].getElementsByTagName('img')[0].src = url_badges[url_badges.length - 1];
        labels[x].value = label;
        Messages[x].value = message;
        color[x].value = color;
    }
    document.getElementById('badges').innerHTML += `<div class="params_badge">
                                                        <input type="text" class='label' id="label" name="label" placeholder=" ">
                                                        <input type="text" class='Message' id="Message" name="Message" placeholder=" ">
                                                        <input type="color" class='color' id="color" name="color" placeholder=" ">
                                                        <img src='' alt="badge">
                                                    </div>`;
    for (let index = 0; index < labels.length; index++)
    {
        if (label[index])
        {
            labels[index].value = label[index];
            Messages[index].value = message[index];
            colors[index].value = color[index];
        }
    }
}

function create_out()
{
    let out = ``;
    url_badges.forEach(elem => out += `[![badge](${elem})](https://shields.io)`);
    document.getElementById('result').value = `
# ${document.getElementById('project_name').value}
  ${out}
  ${document.getElementById('project_desc').value}
## En premier
### Pre requis
  ${document.getElementById('requis').value}
### Installation
  ${"```bash"}
  ${document.getElementById('instruct_install').value}
  ${"```"}
## Comment l'utiliser
  ${document.getElementById('how_to_use').value}
## Fabriqué avec
  ${document.getElementById('log_used').value}
## Auteurs
  ${document.getElementById('made_by').value}
## Notes de projets
  ${document.getElementById('project_notes').value}`;
}