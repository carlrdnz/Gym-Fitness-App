from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from authapp.models import Contact, MembershipPlan, Trainer, Enrollment, Attendance

# Create your views here.
def Home(request):
    return render(request,"index.html")


def attendance(request):
    if not request.user.is_authenticated:
        messages.warning(request, "Please Login and Try Again")
        return redirect('/login')
    SelectTrainer=Trainer.objects.all()
    context={"SelectTrainer":SelectTrainer}
    if request.method=="POST":
        phonenumber=request.POST.get('phonenumber')
        login=request.POST.get('logintime')
        logout=request.POST.get('logouttime')
        selectworkout=request.POST.get('workout')
        trainer=request.POST.get('trainer')

        query=Attendance(phonenumber=phonenumber, login=login, logout=logout, selectworkout=selectworkout, trainer=trainer)
        query.save()
        messages.warning(request, "Attendance Recorded")
        return redirect('/attendance')
    return render(request,"attendance.html", context)


def profile(request):
    if not request.user.is_authenticated:
        messages.warning(request,"You must be Signed Up First")
        return redirect('/login')
    user_phone=request.user
    posts=Enrollment.objects.filter(phonenumber=user_phone)
    attendance=Attendance.objects.filter(phonenumber=user_phone)
    context={"posts":posts,"attendance":attendance}
    return render(request,"profile.html",context)


def signup(request):
    if request.method=="POST":
        username=request.POST.get('usernumber')
        email=request.POST.get('email')
        pass1=request.POST.get('pass1')
        pass2=request.POST.get('pass2')

        if len(username)>11 or len(username)<11:
            messages.info(request,'Phone Number Must be 11 Digits')
            return redirect('/signup')

        if pass1!=pass2:
            messages.info(request,"Password do not match")
            return redirect('/signup')
        
        
        try:
            if User.objects.get(username=username):
                messages.warning(request,'Username is taken')
                return redirect('/signup')
            
        except Exception as identifier:
            pass

        try:
            if User.objects.get(email=email):
                messages.warning(request,'Email is taken')
                return redirect('/signup')
            
        except Exception as identifier:
            pass

        myuser=User.objects.create_user(username, email, pass1)
        myuser.save()

        messages.success(request,"User created successfully, Please Login")
        return redirect('/login')

    return render(request,"signup.html")


def handleLogin(request):
    if request.method=="POST":
        username=request.POST.get('usernumber')
        pass1=request.POST.get('pass1')
        myuser=authenticate(username=username, password=pass1)
        if myuser is not None:
            login(request, myuser)
            return redirect('/')
        else:
            messages.error(request,"Invalid Credentials")
            return redirect('/login')

             
    return render (request,"handlelogin.html")


def handleLogout(request):
    logout(request)
    messages.success(request, "Logout Successful")
    return redirect('/login')


def contact(request):
    if request.method=="POST":
        name=request.POST.get('name')
        email=request.POST.get('email')
        number=request.POST.get('num')
        desc=request.POST.get('desc')
        myquery=Contact(name=name, email=email, phonenumber=number, description=desc)
        myquery.save()
        messages.info(request, "Thanks for Contacting Us we will get back to you soon")
        return redirect('/contact')
    
    return render (request,"contact.html")

def enroll(request):
    if not request.user.is_authenticated:
        messages.warning(request,"You must be Signed Up First")
        return redirect('/login')
    
    Membership=MembershipPlan.objects.all()
    SelectTrainer=Trainer.objects.all()
    context={"Membership":Membership, "SelectTrainer":SelectTrainer}
    if request.method==("POST"):
        fullname=request.POST.get('fullname')
        email=request.POST.get('email')
        gender=request.POST.get('gender')
        phonenumber=request.POST.get('phonenumber')
        birthdate=request.POST.get('birthdate')
        member=request.POST.get('member')
        trainer=request.POST.get('trainer')
        reference=request.POST.get('reference')
        address=request.POST.get('address')

        query=Enrollment(fullname=fullname, email=email, gender=gender, phonenumber=phonenumber, birthdate=birthdate,
                         membership=member, trainer=trainer, reference=reference, address=address)
        query.save()
        messages.success(request,"Thanks for Enrollment")
        return redirect('/join')

    return render(request, "enroll.html", context)