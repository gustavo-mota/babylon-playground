const createScene = function () {
    const scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(90), BABYLON.Tools.ToRadians(65), 10, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    //BABYLON.SceneLoader.ImportMeshAsync("semi_house", "https://assets.babylonjs.com/meshes/", "both_houses_scene.babylon");
    var newMaterial = new BABYLON.StandardMaterial;
    newMaterial.name = "newMaterial";
    newMaterial.diffuseColor = new BABYLON.Color3.Blue;

    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 30, height: 60}, scene);
    let groundMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
    ground.material = groundMaterial;
    let groundTexture = new BABYLON.Texture(Assets.textures.checkerboard_basecolor_png.rootUrl, scene);
    ground.material.diffuseTexture = groundTexture;
    /* const sceneModelURL = 'https://raw.githubusercontent.com/gustavo-mota/babylon-playground/master/'
    const sceneModelName = 'scene.gltf'
    var chinese = BABYLON.SceneLoader.ImportMeshAsync("", sceneModelURL, sceneModelName, scene)
    .then((result)=>{
        result.meshes[0].position.x = 10;
        result.meshes[0].position.z = -25;
        result.meshes[0].position.y = 0.15;
        //myMesh.rotationQuaternion = null;
    }); */

    /* const turtleModelURL = 'https://raw.githubusercontent.com/gustavo-mota/babylon-playground/master/models/turtle/'
    const turtleModelName = 'scene.gltf'
    var turtleLamp = BABYLON.SceneLoader.ImportMeshAsync("", turtleModelURL, turtleModelName, scene) */

    const chinese_lanternURL = 'https://raw.githubusercontent.com/gustavo-mota/babylon-playground/master/models/chinese_lantern/'
    const chinese_lanternName = 'scene.gltf'
    var chinese_lantern1 = BABYLON.SceneLoader.ImportMeshAsync("", chinese_lanternURL, chinese_lanternName, scene).then((result)=>{
        result.meshes[0].scaling.x /= 55;
        result.meshes[0].scaling.y /= 55;
        result.meshes[0].scaling.z /= 55;

        result.meshes[0].position.x = 10;
        result.meshes[0].position.z = -25;
        result.meshes[0].position.y = 10;
    })
    var chinese_lantern1 = BABYLON.SceneLoader.ImportMeshAsync("", chinese_lanternURL, chinese_lanternName, scene).then((result)=>{
        result.meshes[0].scaling.x /= 55;
        result.meshes[0].scaling.y /= 55;
        result.meshes[0].scaling.z /= 55;

        result.meshes[0].position.x = -10;
        result.meshes[0].position.z = -25;
        result.meshes[0].position.y = 10;
    })

    const hu_wine_vesselURL = 'https://raw.githubusercontent.com/gustavo-mota/babylon-playground/master/models/hu_wine_vessel/'
    const hu_wine_vesselName = 'scene.gltf'
    var hu_wine_vessel = BABYLON.SceneLoader.ImportMeshAsync("", hu_wine_vesselURL, hu_wine_vesselName, scene)
    .then((result)=>{
        const increase = 6
        result.meshes[0].position.x = 10.5
        result.meshes[0].position.y = 6.4
        result.meshes[0].position.z = 14.5
        result.meshes[0].scaling.x *= increase;
        result.meshes[0].scaling.y *= increase;
        result.meshes[0].scaling.z *= increase;
    })

    const small_lionURL = 'https://raw.githubusercontent.com/gustavo-mota/babylon-playground/master/models/smal_lion/'
    var small_lion = hu_wine_vessel = BABYLON.SceneLoader.ImportMeshAsync("", small_lionURL, 'scene.gltf', scene)
    .then((result)=>{
        result.meshes[0].position.x = 10.5
        result.meshes[0].position.y = 4
    })

    //const chinese_buddhist_pagodaURL = 'https://github.com/gustavo-mota/babylon-playground/blob/master/models/chinese_pagoda/'
    //var small_lion = hu_wine_vessel = BABYLON.SceneLoader.ImportMeshAsync("", chinese_buddhist_pagodaURL, 'scene.gltf', scene)

    const chinese_cartURL = 'https://raw.githubusercontent.com/gustavo-mota/babylon-playground/master/models/chinese_cart/'
    var chinese_cart = BABYLON.SceneLoader.ImportMeshAsync("", chinese_cartURL, 'scene.gltf', scene)
    .then((result)=>{
        const decrease = 350
        result.meshes[0].position.x = 10.5
        result.meshes[0].position.y = 4
        result.meshes[0].position.z = 14
        result.meshes[0].scaling.x /= decrease;
        result.meshes[0].scaling.y /= decrease;
        result.meshes[0].scaling.z /= decrease;
    })

    const chinese_monkURL = 'https://raw.githubusercontent.com/gustavo-mota/babylon-playground/master/models/chinese_monk/'
    var chinese_monk = BABYLON.SceneLoader.ImportMeshAsync("", chinese_monkURL, 'scene.gltf', scene)
    .then((result)=>{
        const increase = 10
        result.meshes[0].position.x = -43.5
        result.meshes[0].position.y = -90.1
        result.meshes[0].position.z = 142
        result.meshes[0].scaling.x *= increase;
        result.meshes[0].scaling.y *= increase;
        result.meshes[0].scaling.z *= increase;
    })

    const stone_engravingURL = 'https://raw.githubusercontent.com/gustavo-mota/babylon-playground/master/models/chinese_stone_engraving/'
    var stone_engraving = BABYLON.SceneLoader.ImportMeshAsync("", stone_engravingURL, 'scene.gltf', scene)
    .then((result)=>{
        result.meshes[0].position.x = -10.5
        result.meshes[0].position.y = 4
    })

    const zodiac_dragonURL = 'https://raw.githubusercontent.com/gustavo-mota/babylon-playground/master/models/zodiac_dragon/'
    var zodiac_dragon = BABYLON.SceneLoader.ImportMeshAsync("", zodiac_dragonURL, 'scene.gltf', scene)
    .then((result)=>{
        const decrease = 200
        result.meshes[0].position.x = 10.5
        result.meshes[0].position.y = 6.40
        result.meshes[0].position.z = -15.5
        result.meshes[0].scaling.x /= decrease;
        result.meshes[0].scaling.y /= decrease;
        result.meshes[0].scaling.z /= decrease;
    })

    const chinese_bellURL = 'https://raw.githubusercontent.com/gustavo-mota/babylon-playground/master/models/chinese_bell/'
    var chinese_bell = BABYLON.SceneLoader.ImportMeshAsync("", chinese_bellURL, 'scene.gltf', scene)
    .then((result)=>{
        const decrease = 3.5
        result.meshes[0].position.x = 10.5
        result.meshes[0].position.y = 6.60
        result.meshes[0].position.z = 20.5
        result.meshes[0].scaling.x /= decrease;
        result.meshes[0].scaling.y /= decrease;
        result.meshes[0].scaling.z /= decrease;
    })

    const amoghasiddhi_buddhaURL = 'https://raw.githubusercontent.com/gustavo-mota/babylon-playground/master/models/chinese_amoghasiddhi_buddha/'
    var amoghasiddhi_buddha = BABYLON.SceneLoader.ImportMeshAsync("", amoghasiddhi_buddhaURL, 'scene.gltf', scene)
    .then((result)=>{
            const increase = 20
            result.meshes[0].position.x = -8.5
            result.meshes[0].position.y = 3.6
            result.meshes[0].position.z = -15
            result.meshes[0].scaling.x *= increase;
            result.meshes[0].scaling.y *= increase;
            result.meshes[0].scaling.z *= increase;
    })

    const terracota_horseURL = 'https://raw.githubusercontent.com/gustavo-mota/babylon-playground/master/models/terracota_horse/'
    var terracota_horse = BABYLON.SceneLoader.ImportMeshAsync("", terracota_horseURL, 'scene.gltf', scene)
    .then((result)=>{
            const increase = 2
            result.meshes[0].position.x = 11.5
            result.meshes[0].position.y = 6.5
            result.meshes[0].position.z = 10.5
            result.meshes[0].scaling.x *= increase;
            result.meshes[0].scaling.y *= increase;
            result.meshes[0].scaling.z *= increase;
    })

    const coinURL = 'https://raw.githubusercontent.com/gustavo-mota/babylon-playground/master/models/coin/'
    var coin = BABYLON.SceneLoader.ImportMeshAsync("", coinURL, 'scene.gltf', scene)
    .then((result)=>{
        const increase = 3
        result.meshes[0].position.x = -10.5
        result.meshes[0].position.y = 6
        result.meshes[0].position.z = 22.5
        result.meshes[0].scaling.x *= increase;
        result.meshes[0].scaling.y *= increase;
        result.meshes[0].scaling.z *= increase;
    })
    const daggerURL = 'https://raw.githubusercontent.com/gustavo-mota/babylon-playground/master/models/dagger/'
    var dagger = BABYLON.SceneLoader.ImportMeshAsync("", daggerURL, 'scene.gltf', scene)
    .then((result)=>{
        const decrease = 130
        result.meshes[0].position.x = -10.5
        result.meshes[0].position.y = 6.40
        result.meshes[0].position.z = 14.8
        result.meshes[0].scaling.x /= decrease;
        result.meshes[0].scaling.y /= decrease;
        result.meshes[0].scaling.z /= decrease;
    })

    const food_vesselURL = 'https://raw.githubusercontent.com/gustavo-mota/babylon-playground/master/models/food_vessel/'
    var food_vessel = BABYLON.SceneLoader.ImportMeshAsync("", food_vesselURL, 'scene.gltf', scene)
    .then((result)=>{
        const increase = 10
        result.meshes[0].position.x = 47
        result.meshes[0].position.y = 5.2
        result.meshes[0].position.z = -38.5
        result.meshes[0].scaling.x *= increase
        result.meshes[0].scaling.y *= increase
        result.meshes[0].scaling.z *= increase
    })

    let boxList = []
    //boxList.push(box)
    let zValue = 0
    let xValue = 10.5
    let zSeparation = 7.5
    for(let i = 0; i < 13; i++){
        boxList.push(BABYLON.MeshBuilder.CreateBox("box", {}))
        boxList[i].position.x = xValue
        boxList[i].position.z = zValue
        boxList[i].position.y = 2
        boxList[i].scaling.x = 4;
        boxList[i].scaling.y = 4;
        boxList[i].scaling.z = 4;    
        if(i < 3 || (i > 6 && i < 10)){
            zValue += zSeparation;
        }else if(i==3){
            zValue = 0;
        }else if((i > 3 && i < 6) || i > 10){
            zValue -= zSeparation;
        }else if(i == 6){
            zValue = 0
            xValue = -10.5
        }else if (i == 10){
            zValue = -zSeparation
        }
        
    }
    
    //box.position.x = 10.5;
    /* boxList[0].scaling.x = 4;
    boxList[0].scaling.y = 4;
    boxList[0].scaling.z = 4; */
    //chinese.material = newMaterial;
    return scene;
};