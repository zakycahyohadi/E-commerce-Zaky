<?php

namespace App\Http\Controllers;


use App\Models\Event;
use App\Models\Category;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $events = $this->fetchEvent();
        $categories = $this->fetchCategory();
        return view('frontend.index',compact('events','categories'));
    }


    // fecth data event
    private function fetchEvent(){
        $category = request()->query('category');
        $event = Event::upcoming();

        // limit event 6
        if(!request()->query('all_events')){
            $event->limit(6);
        }
        if ($category){
            $event->withCategory($category);
        }
        return $event->get();
    }

    // fetch data category
    private function fetchCategory(){
        $categories = Category::sortByMostEvents();
        // limit category 4
        if(!request()->query('all_categories')){
            $categories->limit(4);
        }
        return $categories->get();
    }

}
