# Visual-Analytics-for-Image-Classification
An interactive tool for interpreting and analysing image classification models using treemaps and hierarchical clustering, inspired by the [Dendromap](https://arxiv.org/abs/2205.06935) paper. Uses the Caltech 256 dataset, consisting of 30607 images across 256 categories.

## Overview:
* Modern deep learning models for image classification are trained on large scale datasets, with the number of images often in the order of thousands.
* Thus it is difficult to obtain a bird's eye view of the contents of visual datasets.
* Analysing the model's errors on a development set and identifying biases in the training set also requires manual effort of going through a large number of images and detecting patterns amongst the images incorrectly predicted by the model. 
* For example, a model may be repeatedly misclassifying white cars (if it is trained on a dataset with only red car images).
* This tool aims to provide an interface to greatly simplify both large scale dataset exploration as well as detection of groups of similar images misclassified by the model.

## Implementation:
* A pretrained Resnet model's final classification layer embeddings are used as features for the images in the dataset.
* Hierarchical clustering with ward linkage is used to obtain a tree structure ([dendrogram](https://en.wikipedia.org/wiki/Dendrogram)) of similar images, which can be recursively split up into further clusters of similar images.
* The tree structure is displayed using [treemaps](https://en.wikipedia.org/wiki/Treemapping), a visualisation technique for interactively displaying structured data at varying levels of granularity.
  
![](/figs/cluster-overview.png)

* This clustering is also done for the development/test set images. Thus similar images to a misclassified image can be easily analysed.

![](/figs/america_flag.png)

## Usage:
* Clone the git repo, then run the below commands:

```
cd dendromap		# inside the dendromap directory
npm install       	# install packages if you haven't
npm run build       	# build project
npm run start		# run on port 8080
```

then navigate to port 8080 for the static build server.
