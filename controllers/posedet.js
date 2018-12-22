import * as posenet from '@tensorflow-models/posenet';
import * as tf from '@tensorflow/tfjs';
import Image from 'canvas';
import XMLHttpRequest from 'xmlhttprequest';

async function loadImage(imagePath) {
  console.log("3");
  const image = new Image;
  const promise = new Promise((resolve, reject) => {
    image.crossOrigin = '';
    image.onload = () => {
      resolve(image);
    };
  });

  image.src = `${imagePath}`;

  return promise;
}

async function help(path){
  console.log("1");
  const net = await posenet.load();
  console.log("2");
  const img = await loadImage(path);
  const input = tf.fromPixels(img);
  console.log(img)
  console.log("4");
  const scaleFactor = 0.50;
  const flipHorizontal = false;
  const outputStride = 16;
  const pose = await net.estimateSinglePose(input, scaleFactor, flipHorizontal
    , outputStride);
  return pose;
}

async function temp(path){
  return {"message" : path}
}

export async function getsim(req, res) {
  const path = req.params[0];
  const val  = await help(path)
  return res.status(200).send(val);
}
