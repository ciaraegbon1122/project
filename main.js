function startClassification()
{
    Navigation.mediaDevice.getUserMedia({audio: true});
    classifer=ml5.soundClassifer('', modelready);
}

function modelready(){
    classifer.classify(gotResults);
}