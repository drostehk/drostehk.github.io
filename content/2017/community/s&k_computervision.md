Title: Computer Vision goes to Hollywood
Slug: s&k_computervision
Date: 2017-01-19
Event_Location: Garage Society
Category: Community
Tags: community, symbol&key
Author: Team Droste
Image: /2017/community/img/sk_computer_vision.jpg
FeaturedImage: /2017/community/img/sk_computer_vision.jpg
Summary: The Science and Science Fiction of Hollywood Computer Vision and AI



## Dr. EFSTRATIOS TSOUGENIS
### A.I. Engineer & Entrepreneur @ [orasis.ai](http://orasis-ai.com/)
----

Artificial Intelligence is an umbrella term that covers so many specialisations. Invited guest Stratos gave us an overview of Computer Vision, with a discussion of Machine Learning and Deep Learning that relates.

### AI
According to a brief scribbled message by Andrew Ng (Head of Baidu research), A.I. may be neatly summarised as:

> - anything a person can do in < 1 second
> - predicting the outcome of next in sequence of events

There are many different streams of A.I. specialties. 'Speech Recognition' is apparently the most mature with the median age of companies being 8 years old. In the list of companies implementing the A.I. streams, we recognised 'SwiftKey' under 'Natural Language Processing'. This handy mobile phone keyboard app was founded in 2008, and is one commonly relied on every day. 

Computer Vision companies have a median age of roughly 6 1/2. The Computer Vision Hardware and Software market is projected to reach $48.6 Billion by 2022 according to [Tractica](https://www.tractica.com/newsroom/press-releases/computer-vision-hardware-and-software-market-to-reach-48-6-billion-by-2022/).

### What is Computer Vision?
'Computer Vision teaches computers to understand images' - Fei Fei Li

The intuitive process of recognising individuals, categories, materials, properties, and scenes as humans is learned over our lifetimes. We sense our surroundings, interpret the results, and store the accuracy and consequences of those interpretations for future use. Similarly, computers must be trained to intrepret a scene - whether image or video - in a way appropriate for our uses. A picture of a road may have many uses. In one case you may need to identify and track vehicles, pedestrians or wildlife. In another it may be weather or road anomalies.

With the growth of Smart Cities, and the exponential increase in volume of images and video along with todays smart phone use - computer vision is going to get a lot of attention. 

### Subsections of Computer Vision
- Object Recognition
- Scene Parsing
- Human Object Tracking & Counting
- Face Recognition
- Facial Analysis (Emotion)
- Facial Analysis (Gender & Age)
- Optical Character Recognition
- Hand Gesture Recognition
- Human Pose Estimation
- Gaze Tracking
- Structure from Motion (estimating 3D structures from 2D image sequences)
- Action Recognition

Various uses for this technology today include:

- Sports Video Analysis (combined with other A.I. would include prediction)
- Weather (Visibility Estimation for HKO)
- Transportation
- Healthcare (e.g.the counting of blood cells)
- Self-Driving Vehicles
- Advertising (Augmented Reality)
- Advertising & Retail (Mall Crowd Analysis and Virtual Fitting Room)
- Surveillance
- Location Recommendation

But what can it really do? We love our movies. Bladerunner, Terminator, Judge Dredd, Minority Report, ... Movies are restricted only by the imagination of their creators and what the audience is willing to buy.


### The Movies
Are all good futuristic movies dystopian? Perhaps if the future were bright it would make for a boring movie. Regardless, which bits can we do NOW?

#### Blade Runner (1982) (photo analysis scene)

- Super (endless?) Resolution Imaging for Single Frame. De-noise, De-blur, Information Transfer. 

*Science Fiction*. There is a limit to the resolution we can observe. Not every frame may be CSI 'enhanced' ad infinitum. Also, there is a part of this scene that seems to look around a corner within the photograph, which is certainly not possible.

#### Terminator II (1991) (the naked Arnold bar scene)

- Human Detection, Object Recognition & Tracking, Optical Character Recognition, Face Detection, Gender Understanding, Fashion Style Analysis, Clothes Size Understanding, Non-rigid Registration of 3D surfaces

*Science*. We can do all of this now.

#### Ocean's Thirteen (2007) (surveillance of casion patrons)

- Human Detection Tracking, Iris Recognition & Tracking, Pupil Dilation, Visual Heart Rate Estimation, Body Temperature Estimation

*Science Fiction* - but only bits of it. In order to get a good read on the eye we need more than some scans of a room full of people. 

#### Batman (1989) (the batmobile comes on command)

- Scene Parsing, Human Detection & Tracking, Object Detection & Tracking

*Science*. In fact, the batmobile looks a bit dated now. Thanks Tesla.

#### Judge Dredd (1995) (picture analysis)

- Face Detection & Recognition, Skin Color Analysis, Biometrics, Height Prediction from 2D, 2D to 3D

*Science Fiction*. We are unable to create information where there is none, and so we can not know what one side of a face will look like from the other (3D from 2D). Similarly we can not know the height of someone from a picture of their face. A best guess within confidence intervals is probably the best we will ever be able to do.

#### Eagle Eye (2008) (car chase scene)

- Face Detection & Recognition, Biometrics, Motion De-blur, 2D to 3D

*Science Fiction*. The limitation is the amount of visual data we are able to get at high resolution at high speed. Perhaps this is a only a hardware limitation! 2D to 3D is also beyond our reach, as per Judge Dredd.

#### Iron Man (2008) (Iron Man mask)

- AR, Iris Detection & Recognition, Object Recognition & Tracking, Face Detection & Recognition, Scene Parsing, Scene Understanding, Motion De-blur

*It depends*. We can do all of these things, however probably not at the speed required for our superhero.

#### Minority Report (2002) (oh so many things)

- Human & Eye Detection & Tracking, Human Segmentation, Iris Recognition from Distance & Tracking, Hand Detection, Hand Gesture Recognition

*Mostly Science*. We need better images of the eye in order to recognise and track it.

#### Mission Impossible II (2000) (sunglasses)

- AR, Retina Recognition

*Science*


### The Tech Bits - Training of Data
In order to train a computer to correctly classify a good deal of visual data we can use Deep Learning (Convolutional Neural Networks). In a nutshell, this is a method whereby a computer can break complicated mappings into series of nested simple mappings. In this way, it is better able to associate intricate visual details (e.g. a certain coloured series of pixels representing a corner or contour) more accurately with an outcome (a car, person, or animal).

Whilst it is nice to think we can intuitively understand how this is achieved - a look at the given resources is dose of reality. The technicalities of how each layer is directed to filter the pixels, work with the results of other filters and connect back together is not for the faint hearted, and this is why we have experts.

[Stanford no less](http://cs231n.github.io/convolutional-networks/) or [Algoriths and Applications book](http://szeliski.org/Book/)

Stratos' insider tips are for the trends in Computer Vision. 

- Computer Vision in Videos
- GANs Generative Adversarial Networks (Unsupervised Learning) [(generation of data/ photos that look authentic)](http://torch.ch/blog/2015/11/13/gan.html)
- [One Shot Learning](http://vision.stanford.edu/documents/Fei-FeiFergusPerona2006.pdf) (using prior knowledge gained, and only one example per category for training data)




