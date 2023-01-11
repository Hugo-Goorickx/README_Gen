function create_out()
{
    document.getElementById('result').innerText = ` # ${document.getElementById('project_name').value}
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